package com.clone.stackoverflow.member.mapper;

import com.clone.stackoverflow.member.dto.MemberPatchDto;
import com.clone.stackoverflow.member.dto.MemberPostDto;
import com.clone.stackoverflow.member.dto.MemberResponseDto;
import com.clone.stackoverflow.member.dto.MyPageResponseDto;
import com.clone.stackoverflow.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto requestBody);

    Member memberPatchDtoToMember(MemberPatchDto requestBody);

    MemberResponseDto memberToMemberResponseDto(Member member);

    List<MemberResponseDto> membersToMembersResponseDto(List<Member> members);

    MyPageResponseDto myPageResponseDto(Member member);
}
