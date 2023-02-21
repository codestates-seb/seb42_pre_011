package com.clone.stackoverflow.answer.mapper;

import com.clone.stackoverflow.answer.dto.AnswerPostDto;
import com.clone.stackoverflow.answer.dto.ResponseAnswerDto;
import com.clone.stackoverflow.answer.dto.AnswerPatchDto;
import com.clone.stackoverflow.answer.entity.Answer;
import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.member.repository.MemberRepository;
import com.clone.stackoverflow.question.entity.Question;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AnswerMapper {

    private MemberRepository memberRepository;
    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto, Question question, Member member){

        return Answer.builder()
                .answerContent(answerPostDto.getAnswerContent())
                .question(question)
                .member(member)
                .build();
    }

    public ResponseAnswerDto answerToAnswerResponseDto(List<Answer> answer){
        return ResponseAnswerDto.builder()
                .answerId(answer.getAnswerId())
                .answerContent(answer.getAnswerContent())
                .build();

    }

    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        answer.setAnswerContent(answerPostDto.getAnswerContent());

        return answer;
    }
    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        Answer answer = new Answer();
        answer.setAnswerContent(answerPatchDto.getAnswerContent());

        return answer;
    }

}
