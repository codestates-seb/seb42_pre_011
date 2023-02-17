package com.clone.stackoverflow.question.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionPatchDto {
    private Long questionID;
    private Long memberID;
    private String questionContent;

}
