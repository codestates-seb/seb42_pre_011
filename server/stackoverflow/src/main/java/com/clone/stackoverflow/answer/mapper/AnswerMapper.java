package com.clone.stackoverflow.answer.mapper;

import com.clone.stackoverflow.answer.dto.AnswerPostDto;
import com.clone.stackoverflow.answer.dto.AnswerPatchDto;
import com.clone.stackoverflow.answer.dto.AnswerResponseDto;
import com.clone.stackoverflow.answer.entity.Answer;
import com.clone.stackoverflow.answer.repository.AnswerRepository;
import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.member.repository.MemberRepository;
import com.clone.stackoverflow.question.entity.Question;
import com.clone.stackoverflow.question.repository.QuestionRepository;
import com.clone.stackoverflow.vote.Vote;
import com.clone.stackoverflow.vote.VoteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class AnswerMapper {

    private MemberRepository memberRepository;
    private QuestionRepository questionRepository;
    private AnswerRepository answerRepository;
    private VoteRepository voteRepository;

    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        answer.setAnswerContent(answerPostDto.getAnswerContent());
        Member member = memberRepository.findById(answerPostDto.getMemberId()).get();
        answer.setMember(member);
        Question question = questionRepository.findById(answerPostDto.getQuestionId()).get();
        answer.setGroupId(question.getGroupId());
        return answer;
    }
    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto, Long answerId) {
<<<<<<< HEAD
        Answer answer = answerRepository.findById(answerId).get();
        if(answerPatchDto.getAnswerContent() != null) {
=======
        Answer answer = answerRepository.findById(answerId).get(); //answerId 로 answerRepo에서 조회
        if(answerPatchDto.getAnswerContent() != null) { //값이 있으면 바꿔준다
>>>>>>> 1bdfcf8470da364a5402b86ca6678d1678f70fc4
            answer.setAnswerContent(answerPatchDto.getAnswerContent());
        }
        return answer;
    }

    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setGroupId(answer.getGroupId());
        answerResponseDto.setAnswerContent(answer.getAnswerContent());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());
        answerResponseDto.setModifiedAt(answer.getModifiedAt());
        answerResponseDto.setMemberId(answer.getMember().getMemberId());

        answerResponseDto.setLikeCount(voteRepository.countAllByAnswerAndVoteTypeNot(answer, Vote.VoteType.HATE));
        answerResponseDto.setHateCount(voteRepository.countAllByAnswerAndVoteTypeNot(answer, Vote.VoteType.LIKE));

    //    if(voteRepository.)
        return answerResponseDto;
    }
}
