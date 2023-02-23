package com.clone.stackoverflow.answer.entity;
import com.clone.stackoverflow.audit.Auditable;
import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.question.entity.Question;

import javax.persistence.*;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;
    private String answerContent;
    private Long groupId;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private Long likeCount = 0L;
    private Long hateCount = 0L;
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

}