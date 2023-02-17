package com.clone.stackoverflow.member.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class MyPageResponseDto {

    private Long memberId;
    private String name;
    private String email;
    private LocalDateTime createdAt;
    private long memberImage;


}
