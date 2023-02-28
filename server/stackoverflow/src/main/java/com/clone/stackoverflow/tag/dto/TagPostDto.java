package com.clone.stackoverflow.tag.dto;
import lombok.Builder;
import lombok.Getter;
@Getter
@Builder
public class TagPostDto {
    private String tagName;
    private String tagContent;
}
