package com.clone.stackoverflow.question.dto;
import com.clone.stackoverflow.tag.entity.Tag;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class QuestionPostDto {
    private Long memberId;
    private String questionContent;
    private List<Tag> tags = new ArrayList<>();
}
