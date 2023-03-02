package com.clone.stackoverflow.answer.dto;

import java.time.LocalDateTime;

import lombok.*;

@Getter
@Setter
public class AnswerResponseDto {
    private Long answerId;
    private Long groupId;
    private String name;
    private String answerContent;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private Boolean isVote;
    private Long likeCount;
    private Long hateCount;
    private Long memberId;
}