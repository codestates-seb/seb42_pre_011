package com.clone.stackoverflow.question.controller;

import com.clone.stackoverflow.question.dto.QuestionPostDto;
import com.clone.stackoverflow.question.mapper.QuestionMapper;
import com.clone.stackoverflow.question.repository.QuestionRepository;
import com.clone.stackoverflow.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/question")
public class QuestionController {
    private QuestionService questionService;
    private QuestionRepository questionRepository;
    private QuestionMapper questionMapper;

    @Autowired
    public QuestionController(QuestionService questionService, QuestionRepository questionRepository, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionRepository = questionRepository;
        this.questionMapper = questionMapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionDto) {
        questionService.saveQuestion(questionMapper.questionPostDtoToQuestion(questionDto));
        return null;
    }
}
