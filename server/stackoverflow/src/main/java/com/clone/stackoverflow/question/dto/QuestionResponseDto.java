package com.clone.stackoverflow.question.dto;

import com.clone.stackoverflow.question.entity.Question;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDateTime;

public class QuestionResponseDto {
    private Long questionId;
    private Long groupId;
    private String questionContent;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Question.QuestonStatus questonStatus = Question.QuestonStatus.REGISTRATION;
    private Boolean isVote;
    private Long likeCount;
    private Long hateCount;
    private Long viewCount;
}
