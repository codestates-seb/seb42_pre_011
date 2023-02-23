package com.clone.stackoverflow.answer.dto;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerPostDto {
    private Long memberId;
    private Long questionId;
    private String answerContent;

}