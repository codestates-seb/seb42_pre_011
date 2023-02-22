package com.clone.stackoverflow.vote;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VotePostDto {
    private Long questionId;
    private Long answerId;
    private Long memberId;
    private Vote.VoteType voteType;
}
