package com.clone.stackoverflow.member.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Builder
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberLoginDto {

    @NotBlank(message = "이메일은 공백일 수 없습니다.")
    private String email;

    @Size(min = 8, max = 20, message = "비밀번호 길이는 8 이상 20 이하여야 합니다.")
    private String password;

}
