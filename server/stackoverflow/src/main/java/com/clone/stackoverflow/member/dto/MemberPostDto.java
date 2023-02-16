package com.clone.stackoverflow.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Setter
@Getter
@NoArgsConstructor
public class MemberPostDto {

    @NotBlank( message  = "이름은 필수 입력 값입니다.")
    private String name;

    @NotBlank(message = "이메일은 공백일 수 없습니다.")
    private String email;

    @Size(min = 8, max = 20, message = "비밀번호 길이는 8 이상 20 이하여야 합니다.")
    private String password;




}
