package com.clone.stackoverflow.member.dto;

import javax.validation.constraints.Size;

public class MemberPatchDto {

    @Size(min = 2, max = 15, message = "이름 길이는 2 이상 15 이하여야 합니다.")
    private String name;

    @Size(min = 8, max = 20, message = "비밀번호 길이는 8 이상 20 이하여야 합니다.")
    private String prePassword;

    @Size(min = 8, max = 20, message = "비밀번호 길이는 8 이상 20 이하여야 합니다.")
    private String newPassword;
}
