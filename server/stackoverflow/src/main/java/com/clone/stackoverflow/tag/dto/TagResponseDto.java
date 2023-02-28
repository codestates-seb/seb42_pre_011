package com.clone.stackoverflow.tag.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TagResponseDto {
    private long tagId; // 태그번호

    private String tagName; //태그이름

    private String tagContent; //내용
}
