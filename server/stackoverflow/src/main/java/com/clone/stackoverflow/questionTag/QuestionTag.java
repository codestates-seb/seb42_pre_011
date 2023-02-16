package com.clone.stackoverflow.questionTag;

import com.clone.stackoverflow.question.Question;
import com.clone.stackoverflow.tag.Tag;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;
}
