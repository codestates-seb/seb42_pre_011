package com.clone.stackoverflow.vote;

import com.clone.stackoverflow.answer.entity.Answer;
import com.clone.stackoverflow.answer.repository.AnswerRepository;
import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.member.repository.MemberRepository;
import com.clone.stackoverflow.question.entity.Question;
import com.clone.stackoverflow.question.repository.QuestionRepository;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class VoteMapper {

    private AnswerRepository answerRepository;
    private QuestionRepository questionRepository;
    private MemberRepository memberRepository;

    public Vote votePostDtoToVote(VotePostDto votePostDto) {
<<<<<<< HEAD
=======

>>>>>>> 1bdfcf8470da364a5402b86ca6678d1678f70fc4
        Vote vote = new Vote();

        Question question = questionRepository.findById(votePostDto.getQuestionId()).get();
        vote.setQuestion(question);
        Answer answer = answerRepository.findById(votePostDto.getAnswerId()).get();
        vote.setAnswer(answer);
        Member member = memberRepository.findById(votePostDto.getMemberId()).get();
        vote.setMember(member);

        vote.setVoteType(votePostDto.getVoteType());
        return vote;
    }
}
