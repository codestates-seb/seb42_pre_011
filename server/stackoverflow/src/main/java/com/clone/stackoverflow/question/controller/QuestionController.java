package com.clone.stackoverflow.question.controller;

import com.clone.stackoverflow.question.dto.QuestionPatchDto;
import com.clone.stackoverflow.question.dto.QuestionPostDto;
import com.clone.stackoverflow.question.mapper.QuestionMapper;
import com.clone.stackoverflow.question.repository.QuestionRepository;
import com.clone.stackoverflow.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{question-id}/{member-id}")
    public ResponseEntity getQuestion(@RequestParam(name = "question-id") Long questionId, @RequestParam(name = "member-id") Long memberId) {
        questionService.findQuestion(questionId, memberId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}/{member-id}")
    public ResponseEntity deleteQuestion(@RequestParam(name = "question-id") Long questionId, @RequestParam(name = "member-id") Long memberId) {
        questionService.deleteQuestion(questionId, memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

//    @PatchMapping("/question-id")
//    public ResponseEntity patchQuestion(@RequestBody QuestionPatchDto questionPatchDto) {
//        questionService.patchQuestion(questionMapper.);
//    }
}
