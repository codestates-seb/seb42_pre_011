package com.clone.stackoverflow.member.entity;

import com.clone.stackoverflow.answer.entity.Answer;
import com.clone.stackoverflow.audit.Auditable;
import com.clone.stackoverflow.question.entity.Question;
import lombok.Builder;
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
@NoArgsConstructor
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;
    @Column(length = 100,nullable = false, unique = true)
    private String name;

    @Column(length = 100,nullable = false,updatable = false, unique = true)
    private String email;

    @Column(length = 100,nullable = false)
    private String password;


    private long memberImage;

    public Member(Long memberId, String name, String email, String password, long memberImage) {
        this.memberId = memberId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.memberImage = memberImage;
    }

    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

//    @OneToMany(mappedBy = "member")
//    private List<Answer> answers = new ArrayList<>();


}
