package com.clone.stackoverflow.answer.controller;
import com.clone.stackoverflow.answer.dto.AnswerPatchDto;
import com.clone.stackoverflow.answer.dto.AnswerPostDto;
import com.clone.stackoverflow.answer.dto.ResponseAnswerDto;
import com.clone.stackoverflow.answer.entity.Answer;
import com.clone.stackoverflow.answer.mapper.AnswerMapper;
import com.clone.stackoverflow.answer.repository.AnswerRepository;
import com.clone.stackoverflow.answer.service.AnswerService;
import com.clone.stackoverflow.answer.dto.AnswerPageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.clone.stackoverflow.answer.PageInfo;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/answers")
public class AnswerController {
    private AnswerService answerService;
    private AnswerRepository answerRepository;
    private AnswerMapper answerMapper;

    @Autowired
    public AnswerController(AnswerService answerService, AnswerRepository answerRepository, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerRepository = answerRepository;
        this.answerMapper = answerMapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerDto) {
        answerService.saveAnswer(answerMapper.answerPostDtoToAnswer(answerDto));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{answerId}/{memberId}")
    public ResponseEntity getAnswer(@RequestParam(name = "answerId") Long answerId, @RequestParam(name = "memberId") Long memberId) {
        answerService.findAnswer(answerId, memberId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{answerId}/{memberId}")
    public ResponseEntity deleteAnswer(@RequestParam(name = "answerId") Long answerId, @RequestParam(name = "memberId") Long memberId) {
        answerService.deleteAnswer(answerId, memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/answerId")
    public ResponseEntity patchAnswer(@RequestBody AnswerPatchDto answerPatchDto) {
        answerService.patchAnswer(answerMapper.answerPatchDtoToAnswer(answerPatchDto));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity searchAnswer(@RequestParam int page, @RequestParam(name="keyword") String searchString,
                                         @RequestParam(defaultValue = "createdAt", name = "sortBy") String sortBy,
                                         @RequestParam(defaultValue = "DESC", name = "sortDir") String sortDir) {
        Page<Answer> answerPage = answerService.searchAnswer(page - 1, searchString, sortBy, sortDir);
        PageInfo pageInfo = new PageInfo(page - 1, 10, (int) answerPage.getTotalElements(), answerPage.getTotalPages());

        List<Answer> answers = answerPage.getContent();
        List<ResponseAnswerDto> response = (List<ResponseAnswerDto>) answerMapper.answerToAnswerResponseDto(answers);

        return new ResponseEntity<>(new AnswerPageDto(response, pageInfo), HttpStatus.OK);
    }
}
