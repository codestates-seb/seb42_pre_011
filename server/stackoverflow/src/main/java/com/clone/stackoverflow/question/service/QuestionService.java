package com.clone.stackoverflow.question.service;

import com.clone.stackoverflow.answer.dto.AnswerResponseDto;
import com.clone.stackoverflow.answer.entity.Answer;
import com.clone.stackoverflow.answer.mapper.AnswerMapper;
import com.clone.stackoverflow.answer.repository.AnswerRepository;
import com.clone.stackoverflow.exception.BusinessLogicException;
import com.clone.stackoverflow.exception.ExceptionCode;
import com.clone.stackoverflow.question.dto.QuestionDto;
import com.clone.stackoverflow.question.dto.QuestionResponseDto;
import com.clone.stackoverflow.question.entity.Question;
import com.clone.stackoverflow.question.mapper.QuestionMapper;
import com.clone.stackoverflow.question.repository.QuestionRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class QuestionService {

    private QuestionRepository questionRepository;
    private AnswerRepository answerRepository;
    private AnswerMapper answerMapper;
    private QuestionMapper questionMapper;

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

    public QuestionResponseDto findQuestion(Long questionId, Long memberId) {
        Question question = questionRepository.findById(questionId).get();
        Long viewCount = question.getViewCount()+1; //조회수
        question.setViewCount(viewCount);
        questionRepository.save(question);

        Long groupId = question.getGroupId();
        List<Answer> answers = answerRepository.findByGroupId(groupId);
        List<AnswerResponseDto> answerDtos = new ArrayList<>();
        for (Answer answer : answers) {
            answerDtos.add(answerMapper.answerToAnswerResponseDto(answer));
        }
        return new QuestionResponseDto<>(questionMapper.questionToQuestionResponseDto(question), answerDtos);
    }

    public void deleteQuestion(Long questionId, Long memberId) {
        Question question = questionRepository.findById(questionId).get();
        Long groupId = question.getGroupId();

        if(question.getMember().getMemberId().equals(memberId)) {
            questionRepository.deleteById(questionId);
            //answerRepository.deleteAllByGroupId(groupId); 삭제구현.. answer 조회는 안됨.
        }
        else {
            throw new BusinessLogicException(ExceptionCode.NOT_ALLOWED);
        }
    }

    public void patchQuestion(Question question, Long memberId) {
        if(question.getMember().getMemberId().equals(memberId)) {
            question.setModifiedAt(LocalDateTime.now());
            questionRepository.save(question);
        }
        else {
            throw new BusinessLogicException(ExceptionCode.NOT_ALLOWED);
        }
    }

    public Page<Question> searchQuestion(int page, String searchString, String sortBy, String sortDir) {
        PageRequest pageRequest; //페이지 만들어주는 친구
        if(sortDir.equals("ASC")) { //오름차순
            pageRequest = PageRequest.of(page, 10, Sort.by(sortBy).ascending());
        }
        else {
            pageRequest = PageRequest.of(page, 10, Sort.by(sortBy).descending());
        }
        return questionRepository.findByQuestionContentContaining(searchString, pageRequest);
    }

    public Page<Question> findAllQuestions(int page, String sortBy, String sortDir) {
        PageRequest pageRequest;
        if(sortDir.equals("ASC")) {
            pageRequest = PageRequest.of(page, 10, Sort.by(sortBy).ascending());
        }
        else {
            pageRequest = PageRequest.of(page, 10, Sort.by(sortBy).descending());
        }
        return questionRepository.findAll(pageRequest);
    }
}
