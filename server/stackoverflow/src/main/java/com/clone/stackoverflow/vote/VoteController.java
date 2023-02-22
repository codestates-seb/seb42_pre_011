package com.clone.stackoverflow.vote;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/votes")
@AllArgsConstructor
public class VoteController {

    private VoteService voteService;
    private VoteMapper voteMapper;

    @PostMapping
    public ResponseEntity postVote(@RequestBody VotePostDto votePostDto) {
        voteService.vote(voteMapper.votePostDtoToVote(votePostDto));
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
