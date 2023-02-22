package com.clone.stackoverflow.question.dto;

import lombok.Getter;

@Getter
public class QuestionsResponseDto<T> {
    private QuestionDto question;
    private T answers;
}
