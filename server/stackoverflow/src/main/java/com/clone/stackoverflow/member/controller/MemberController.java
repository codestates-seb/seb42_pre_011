package com.clone.stackoverflow.member.controller;

import com.clone.stackoverflow.dto.MultiResponseDto;
import com.clone.stackoverflow.dto.SingleResponseDto;
import com.clone.stackoverflow.member.dto.MemberPatchDto;
import com.clone.stackoverflow.member.dto.MemberPostDto;
import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.member.mapper.MemberMapper;
import com.clone.stackoverflow.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
@Slf4j
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;



    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto requestBody) {
        Member member = memberService.createMember(mapper.memberPostDtoToMember(requestBody));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponseDto(member)), HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberPatchDto requestBody) {
        requestBody.setMemberId(memberId);

        Member member = memberService.updateMember(mapper.memberPatchDtoToMember(requestBody));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponseDto(member)), HttpStatus.OK);
    }


    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
        Member member = memberService.findMember(memberId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.myPageResponseDto(member)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Member> members = memberService.findMembers(page - 1, size);
        List<Member> content = members.getContent();
        return new ResponseEntity(new MultiResponseDto(mapper.membersToMembersResponseDto(content), members), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId) {
        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
