package com.clone.stackoverflow.question.mapper;

import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.member.repository.MemberRepository;
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
        Member member = memberRepository.findById(questionPostDto.getMemberId()).get();
        Question question = new Question();

        question.setQuestionContent(questionPostDto.getQuestionContent());

        //태그
        return question;
    }
}
