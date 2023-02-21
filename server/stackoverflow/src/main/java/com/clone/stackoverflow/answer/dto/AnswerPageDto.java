package com.clone.stackoverflow.answer.dto;

import com.clone.stackoverflow.question.PageInfo;
import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class AnswerPageDto<T> {
    private T data;
    private PageInfo pageInfo;

    public AnswerPageDto(List<ResponseAnswerDto> response, com.clone.stackoverflow.answer.PageInfo pageInfo) {
    }
}
