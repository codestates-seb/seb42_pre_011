package com.clone.stackoverflow.question.entity;

import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.questionTag.QuestionTag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;
    private Long groupId;
    private String questionContent;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private QuestonStatus questonStatus = QuestonStatus.REGISTRATION;
    private Boolean isVote;
    private Long likeCount;
    private Long hateCount;
    private Long viewCount;
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
    @OneToMany(mappedBy = "question")
    private List<QuestionTag> questionTags = new ArrayList<>();

    public enum QuestonStatus {
        ANSWERED, REGISTRATION
    }
}

