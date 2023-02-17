package com.clone.stackoverflow.answer.entity;
import com.sun.istack.NotNull;
import lombok.Builder; // 수정필요
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.time.LocalDateTime; // 수정필요
//import Stackoverflow.domain.answer.entity.Answer;  답변 도메인, 수정필요
//import stackoverflow.global.auditing.BaseTime; 설정시간, 수정필요
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table

public class Answer {
    //기본적인 시간, 수정필요
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    @Column(name = "answerId", unique = true)
    private Long answerId;
// 답변의 번호
    @NotNull
    private long groupId;
//잘 모르겠다.
    @NotNull
    private long memberId;
// 멤버의 번호
    /* 어떻게 text들을 넣을까? */
    @NotNull
    @Column (length = 999)
    private int likeCount;
    // 좋아요 수가 몇 개 이상일때 어떻게 한다든지 하는 일이 있을수도 있을거같다.
    @NotNull
    @Column (length = 999)
    private int hateCount;

    private LocalDateTime createdAt;

    // 나중엔 ㅁㅁ년ㅁㅁ웖ㅁ일ㅁㅁ시ㅁㅁ분 이런식으로 바꿀거다.

    private int modifidedAt;
    // 수정되었으면 글 옆에 (수정됨) 표시와 함께 나오도록 하겠지?

    @Builder
    public Answer(long answerId){
        this.answerId = answerId;
    }
    //추가 예정

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
    public Answer(Long answerId) { // 이건 글 삭제할때 아이디 번호 찾을려고
        this.answerId = answerId;
    }
}