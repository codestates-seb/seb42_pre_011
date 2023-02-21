package com.clone.stackoverflow.answer.service;
import com.clone.stackoverflow.answer.entity.Answer;
import com.clone.stackoverflow.answer.repository.AnswerRepository;
import com.clone.stackoverflow.exception.BusinessLogicException;
import com.clone.stackoverflow.exception.ExceptionCode;
import com.clone.stackoverflow.question.entity.Question;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Optional;


@Service
@Transactional
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;

    public Answer postAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    public void deleteAnswer(Long answerId, Long memberId){
        Answer answer = findAnswer(answerId, memberId);

        answerRepository.delete(answer);
    }

    public void saveAnswer(Answer answer) {
        String time = "";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHssSSS");
        Calendar dateTime = Calendar.getInstance();
        time = sdf.format(dateTime.getTime());
        String random = String.valueOf((int)(Math.random()*100));
        Long unique = Long.parseLong(time + random);
        answer.setGroupId(unique);

        answer.setAnswerLikeCount(0L);
        answer.setAnswerLikeCount(0L);
        answer.setCreatedAt(LocalDateTime.now());

       answerRepository.save(answer);
    }

    public void patchAnswer(Answer answer) {
        answer.setModifiedAt(LocalDateTime.now());
        answerRepository.save(answer);
    }
    public Answer findAnswer(Long answerId, Long memberId){
        Optional<Answer> findAnswer = answerRepository.findById(answerId);
        return findAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }

    public Page<Answer> searchAnswer(int page, String searchString, String sortBy, String sortDir) {
        PageRequest pageRequest;
        if(sortDir.equals("ASC")) {
            pageRequest = PageRequest.of(page, 10, Sort.by(sortBy).ascending());
        }
        else {
            pageRequest = PageRequest.of(page, 10, Sort.by(sortBy).descending());
        }
        return answerRepository.findByAnswerContentContaining(searchString, pageRequest);
    }

}