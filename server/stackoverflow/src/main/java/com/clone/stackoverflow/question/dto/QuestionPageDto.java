package com.clone.stackoverflow.question.dto;

import com.clone.stackoverflow.question.PageInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public class QuestionPageDto<T> {
    private T data;
    private PageInfo pageInfo;
}
