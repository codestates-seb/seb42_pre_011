package com.clone.stackoverflow.answer.dto;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
@Getter
public class AnswerPostDto {
    private String content;
    //내용물, final 쓸까?

    @JsonCreator
    public AnswerPostDto(@JsonProperty("content") String content) {
        this.content = content;
    }
}