package com.clone.stackoverflow.question.dto;

import lombok.Getter;

@Getter
public class QuestionsResponseDto<T> {
    private QuestionResponseDto question;
    private T answers;
}
