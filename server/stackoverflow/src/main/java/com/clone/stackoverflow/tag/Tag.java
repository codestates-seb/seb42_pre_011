package com.clone.stackoverflow.tag;

import com.clone.stackoverflow.questionTag.QuestionTag;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;
    private String tagName;
    private String tagContent;
    @OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTags = new ArrayList<>();
}
