package com.clone.stackoverflow.question.dto;

import com.clone.stackoverflow.question.entity.Question;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionResponseDto {
    private Long questionId;
    private Long groupId;
    private String questionContent;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Question.QuestionStatus questionStatus = Question.QuestionStatus.REGISTRATION;
    private Boolean isVote;
    private Long likeCount;
    private Long hateCount;
    private Long viewCount;
    private Long MemberId;
}
