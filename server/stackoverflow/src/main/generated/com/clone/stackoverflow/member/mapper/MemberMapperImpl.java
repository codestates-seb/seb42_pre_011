package com.clone.stackoverflow.member.mapper;

import com.clone.stackoverflow.member.dto.MemberPatchDto;
import com.clone.stackoverflow.member.dto.MemberPostDto;
import com.clone.stackoverflow.member.dto.MemberResponseDto;
import com.clone.stackoverflow.member.dto.MyPageResponseDto;
import com.clone.stackoverflow.member.dto.MyPageResponseDto.MyPageResponseDtoBuilder;
import com.clone.stackoverflow.member.entity.Member;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-20T16:21:46+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberPostDto memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member member = new Member();

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberPatchDto memberPatchDto) {
        if ( memberPatchDto == null ) {
            return null;
        }

        Member member = new Member();

        return member;
    }

    @Override
    public MemberResponseDto memberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberResponseDto memberResponseDto = new MemberResponseDto();

        memberResponseDto.setMemberId( member.getMemberId() );
        memberResponseDto.setName( member.getName() );
        memberResponseDto.setEmail( member.getEmail() );
        memberResponseDto.setCreatedAt( member.getCreatedAt() );
        memberResponseDto.setMemberImage( member.getMemberImage() );

        return memberResponseDto;
    }

    @Override
    public List<MemberResponseDto> membersToMembersResponseDto(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberResponseDto> list = new ArrayList<MemberResponseDto>( members.size() );
        for ( Member member : members ) {
            list.add( memberToMemberResponseDto( member ) );
        }

        return list;
    }

    @Override
    public MyPageResponseDto myPageResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        MyPageResponseDtoBuilder myPageResponseDto = MyPageResponseDto.builder();

        myPageResponseDto.memberId( member.getMemberId() );
        myPageResponseDto.name( member.getName() );
        myPageResponseDto.email( member.getEmail() );
        myPageResponseDto.createdAt( member.getCreatedAt() );
        myPageResponseDto.memberImage( member.getMemberImage() );

        return myPageResponseDto.build();
    }
}
