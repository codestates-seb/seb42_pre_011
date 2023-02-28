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
<<<<<<< HEAD:server/stackoverflow/src/main/java/com/clone/stackoverflow/tag/entity/Tag.java

    public Tag(String tag, String s) {
    }
    /*@OneToMany(mappedBy = "tag")
=======
    @OneToMany(mappedBy = "tag")
>>>>>>> 4bae4a6adf0547b080a456bfcc67d5d47428d7f2:server/stackoverflow/src/main/java/com/clone/stackoverflow/tag/Tag.java
    private List<QuestionTag> questionTags = new ArrayList<>();


    public Tag(String tagName, String content) {
        this.tagName = tagName;
        this.content = content;
    }*/
}