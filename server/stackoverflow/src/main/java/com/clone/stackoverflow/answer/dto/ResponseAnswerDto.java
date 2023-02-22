package com.clone.stackoverflow.answer.dto;

import java.time.LocalDateTime;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@Data
@Builder
public class ResponseAnswerDto {
    private Long answerId;
    private Long questionId;

    private Long answerContent;

    private long groupId;
    private Long memberId;
    private String content;
    private int likeCount;
    private int hateCount;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}