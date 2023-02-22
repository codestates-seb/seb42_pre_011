package com.clone.stackoverflow.answer.entity;
import com.clone.stackoverflow.vote.Vote;
import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.question.entity.Question;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
@Data
@Builder
@AllArgsConstructor
@EqualsAndHashCode(callSuper=false)

public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answerId", unique = true)
    private Long answerId;
    // 답변의 번호

    @Lob
    @Column(name = "answerContent")
    private Long answerContent;
    //답변의 내용
    private long groupId;
    //잘 모르겠다.

    @Column(name = "answerLikeCount", length = 999)
    private long answerLikeCount;
    //답변의 좋아요 갯수

    @Column(name = "answerHateCount", length = 999)
    private long answerHateCount;
    //답변의 싫어요 갯수
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "questionId")
    private Question question;
    // 문제번호

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member;
    //멤버

    //private long memberId;
    // 멤버의 번호

    @JsonIgnore
    @Builder.Default
    @OneToMany(mappedBy = "answer", cascade = CascadeType.REMOVE)
    private List<Vote> answerVotes = new ArrayList<>();
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    // 수정되었으면 글 옆에 (수정됨) 표시와 함께 나오도록 하겠지?


    @Builder
    public Answer(long answerId){
        this.answerId = answerId;
    }
    //답변의 번호
    @Builder

 /*
    private String profile;
//멤버 혹은 답답글의 프로필
    private String nickname;
//멤버 혹은 답답글의 닉네임



    @OneToMany(mappedBy = "account", cascade = CascadeType.REMOVE)
    private List<Question> questionsList = new ArrayList<>();


    @OneToMany(mappedBy = "account", cascade = CascadeType.REMOVE)
    private List<Answer> answerList = new ArrayList<>();
*/
 public Answer(Long answerContent) {
     this.answerContent = answerContent;
    }



}