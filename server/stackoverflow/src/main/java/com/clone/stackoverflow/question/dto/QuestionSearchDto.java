package com.clone.stackoverflow.question.dto;

import lombok.Getter;

@Getter
public class QuestionSearchDto {
    private int page;
    private String keyword;
    private int sortBy;
    private int sortDir;

}
