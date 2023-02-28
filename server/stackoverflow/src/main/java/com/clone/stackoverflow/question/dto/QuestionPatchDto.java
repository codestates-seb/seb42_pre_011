package com.clone.stackoverflow.question.dto;
import com.clone.stackoverflow.tag.entity.Tag;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class QuestionPatchDto {
    private Long memberID;
    private String questionTitle;
    private String questionContent;
    private List<Tag> tags = new ArrayList<>();
}
