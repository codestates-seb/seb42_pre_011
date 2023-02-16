package com.clone.stackoverflow.vote;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;
    private VoteType voteType;
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    public enum VoteType {
        ANSWER, QUESTION
    }

    //임시클래스
    @Entity
    public class Answer{

    }

}
