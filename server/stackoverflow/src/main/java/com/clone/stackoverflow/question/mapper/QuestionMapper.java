package com.clone.stackoverflow.question.mapper;

import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.member.repository.MemberRepository;
import com.clone.stackoverflow.question.dto.QuestionPatchDto;
import com.clone.stackoverflow.question.dto.QuestionPostDto;
import com.clone.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Calendar;

@AllArgsConstructor
@Component
public class QuestionMapper {
    private MemberRepository memberRepository;

    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        question.setQuestionContent(questionPostDto.getQuestionContent());
       // question.setMember(questionPostDto.getMemberId());
        //태그
        return question;
    }

    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        Member member = memberRepository.findById(questionPatchDto.getMemberID()).get();

    }
}
