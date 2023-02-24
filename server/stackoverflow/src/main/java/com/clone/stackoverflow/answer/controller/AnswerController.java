package com.clone.stackoverflow.answer.controller;
import com.clone.stackoverflow.answer.dto.AnswerPatchDto;
import com.clone.stackoverflow.answer.dto.AnswerPostDto;
import com.clone.stackoverflow.answer.mapper.AnswerMapper;
import com.clone.stackoverflow.answer.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/answers")
public class AnswerController {
    private AnswerService answerService;
    private AnswerMapper answerMapper;

    @Autowired
    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto) {
        answerService.saveAnswer(answerMapper.answerPostDtoToAnswer(answerPostDto));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-id}/{member-id}")
    public ResponseEntity patchAnswer(@RequestBody AnswerPatchDto answerPatchDto,
                                      @PathVariable(name="answer-id") Long answerId, @PathVariable(name="member-id") Long memberId) {
        answerService.patchAnswer(answerMapper.answerPatchDtoToAnswer(answerPatchDto, answerId), memberId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}/{member-id}")
    public ResponseEntity deleteAnswer(@PathVariable(name="answer-id") Long answerId, @PathVariable(name = "member-id") Long memberId) {
        answerService.deleteAnswer(answerId, memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}