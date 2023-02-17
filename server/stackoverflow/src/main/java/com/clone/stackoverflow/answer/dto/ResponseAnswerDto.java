package com.clone.stackoverflow.answer.dto;

import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ResponseAnswerDto {
    private Long answerId;
    private Long questionId;
    private long groupId;
    private Long memberId;
    private String content;
    private int likeCount;
    private int hateCount;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}