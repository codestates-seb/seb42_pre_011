package com.clone.stackoverflow.question.service;

import com.clone.stackoverflow.question.entity.Question;
import com.clone.stackoverflow.question.repository.QuestionRepository;
import lombok.AllArgsConstructor;
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
        if(question.getMember().getUser_id() == memberId) {
            questionRepository.deleteById(questionId);
        }
    }

}