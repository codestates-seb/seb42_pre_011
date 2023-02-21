package com.clone.stackoverflow.answer.dto;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class AnswerPatchDto {
    private final String content;
    private Long answerId;
    private Long memberId;
    private Long answerContent;
    @JsonCreator
    public AnswerPatchDto(@JsonProperty("content") String content) {
        this.content = content;
    }
}