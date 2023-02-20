package com.clone.stackoverflow.question.controller;

import com.clone.stackoverflow.question.PageInfo;
import com.clone.stackoverflow.question.dto.QuestionPageDto;
import com.clone.stackoverflow.question.dto.QuestionPatchDto;
import com.clone.stackoverflow.question.dto.QuestionPostDto;
import com.clone.stackoverflow.question.dto.QuestionResponseDto;
import com.clone.stackoverflow.question.entity.Question;
import com.clone.stackoverflow.question.mapper.QuestionMapper;
import com.clone.stackoverflow.question.repository.QuestionRepository;
import com.clone.stackoverflow.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

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

    @PatchMapping("/question-id")
    public ResponseEntity patchQuestion(@RequestBody QuestionPatchDto questionPatchDto) {
        questionService.patchQuestion(questionMapper.questionPatchDtoToQuestion(questionPatchDto));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity searchQuestion(@RequestParam int page, @RequestParam(name="keyword") String searchString,
                                         @RequestParam(defaultValue = "createdAt", name = "sortBy") String sortBy,
                                         @RequestParam(defaultValue = "DESC", name = "sortDir") String sortDir) {
        Page<Question> questionPage = questionService.searchQuestion(page - 1, searchString, sortBy, sortDir);
        PageInfo pageInfo = new PageInfo(page - 1, 10, (int) questionPage.getTotalElements(), questionPage.getTotalPages());

        List<Question> questions = questionPage.getContent();
        List<QuestionResponseDto> response = questionMapper.questionsToQuestionResponseDto(questions);

        return new ResponseEntity<>(new QuestionPageDto(response, pageInfo), HttpStatus.OK);
    }
}
