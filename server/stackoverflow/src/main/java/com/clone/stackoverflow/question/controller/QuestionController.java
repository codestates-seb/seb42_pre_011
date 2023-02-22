package com.clone.stackoverflow.question.controller;

import com.clone.stackoverflow.dto.SingleResponseDto;
import com.clone.stackoverflow.member.entity.Member;
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
@RequestMapping("/questions")
public class QuestionController {
    private QuestionService questionService;
    private QuestionRepository questionRepository;
    private QuestionMapper questionMapper;

    @Autowired
    public QuestionController(QuestionService questionService, QuestionRepository questionRepository,
                              QuestionMapper questionMapper) {
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
    public ResponseEntity getQuestion(@PathVariable(name="question-id") Long questionId, @PathVariable(name="member-id") Long memberId) {
        Question question = questionService.findQuestion(questionId, memberId);
        //answer추가해서 테스트 필요
        return new ResponseEntity<>(new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}/{member-id}")
    public ResponseEntity deleteQuestion(@PathVariable(name="question-id") Long questionId, @PathVariable(name="member-id") Long memberId) {
        questionService.deleteQuestion(questionId, memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/{question-id}/{member-id}")
    public ResponseEntity patchQuestion(@RequestBody QuestionPatchDto questionPatchDto, @PathVariable(name="question-id") Long questionId, @PathVariable(name="member-id") Long memberId) {
        System.out.println("QuestionController.patchQuestion");
        questionService.patchQuestion(questionMapper.questionPatchDtoToQuestion(questionPatchDto, questionId), memberId);
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

    @GetMapping
    public ResponseEntity getAllQuestions(@RequestParam int page,
                                          @RequestParam(defaultValue = "createdAt", name = "sortBy") String sortBy,
                                          @RequestParam(defaultValue = "DESC", name = "sortDir") String sortDir) {
        Page<Question> questionPage = questionService.findAllQuestions(page - 1, sortBy, sortDir);
        PageInfo pageInfo = new PageInfo(page - 1, 10, (int) questionPage.getTotalElements(), questionPage.getTotalPages());

        List<Question> questions = questionPage.getContent();
        List<QuestionResponseDto> response = questionMapper.questionsToQuestionResponseDto(questions);

        return new ResponseEntity<>(new QuestionPageDto(response, pageInfo), HttpStatus.OK);
    }
}
