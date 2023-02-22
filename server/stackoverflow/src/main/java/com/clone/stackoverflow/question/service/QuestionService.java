package com.clone.stackoverflow.question.service;

import com.clone.stackoverflow.exception.BusinessLogicException;
import com.clone.stackoverflow.exception.ExceptionCode;
import com.clone.stackoverflow.question.entity.Question;
import com.clone.stackoverflow.question.repository.QuestionRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Optional;

@Service
public class QuestionService {

    private QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public void saveQuestion(Question question) {
        String time = "";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHssSSS");
        Calendar dateTime = Calendar.getInstance();
        time = sdf.format(dateTime.getTime());
        String random = String.valueOf((int)(Math.random()*100));
        Long unique = Long.parseLong(time + random);
        question.setGroupId(unique);

        question.setHateCount(0L);
        question.setLikeCount(0L);
        question.setCreatedAt(LocalDateTime.now());

        questionRepository.save(question);
    }

    public Question findQuestion(Long questionId, Long memberId) {
        Question question = questionRepository.findById(questionId).get();
        Long viewCount = question.getViewCount()+1;
        question.setViewCount(viewCount);
        questionRepository.save(question);
        //answerRepository.findByGroupId(question.getGroupId());
        return question;
    }

    public void deleteQuestion(Long questionId, Long memberId) {
        Question question = questionRepository.findById(questionId).get();

        if(question.getMember().getMemberId().equals(memberId)) {
            questionRepository.deleteById(questionId);
            //answer 도 같이 삭제 구현 ++
        }
        else {
            throw new BusinessLogicException(ExceptionCode.NOT_ALLOWED);
        }
    }

    public void patchQuestion(Question question) {
        question.setModifiedAt(LocalDateTime.now());
        questionRepository.save(question);
    }

    public Page<Question> searchQuestion(int page, String searchString, String sortBy, String sortDir) {
        PageRequest pageRequest;
        if(sortDir.equals("ASC")) {
            pageRequest = PageRequest.of(page, 10, Sort.by(sortBy).ascending());
        }
        else {
            pageRequest = PageRequest.of(page, 10, Sort.by(sortBy).descending());
        }
        return questionRepository.findByQuestionContentContaining(searchString, pageRequest);
    }
}
