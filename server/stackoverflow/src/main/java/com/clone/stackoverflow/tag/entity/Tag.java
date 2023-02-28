package com.clone.stackoverflow.tag.entity;

import com.clone.stackoverflow.questionTag.QuestionTag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@NoArgsConstructor
@Entity
@Getter
@Setter
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;
    private String tagName;
    private String tagContent;

    public Tag(String tag, String s) {
    }
    /*@OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTags = new ArrayList<>();


    public Tag(String tagName, String content) {
        this.tagName = tagName;
        this.content = content;
    }*/
}