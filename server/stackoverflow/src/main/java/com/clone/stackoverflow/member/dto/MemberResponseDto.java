package com.clone.stackoverflow.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor
public class MemberResponseDto {

    private Long memberId;

    private String name;

    private String email;

    private LocalDateTime createdAt;

    private long memberImage;
}
