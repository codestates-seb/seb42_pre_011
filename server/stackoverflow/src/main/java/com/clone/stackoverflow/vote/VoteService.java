package com.clone.stackoverflow.vote;

import com.clone.stackoverflow.answer.entity.Answer;
import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.question.entity.Question;
import org.springframework.stereotype.Service;

@Service
public class VoteService {
    private VoteRepository voteRepository;

    public VoteService(VoteRepository voteRepository) {
        this.voteRepository = voteRepository;
    }

    public void vote(Vote vote) {
        Long voteId = vote.getVoteId();
        Member member = vote.getMember();
        Question question = vote.getQuestion();
        Answer answer = vote.getAnswer();

        if(voteRepository.findByAnswerAndMember(answer, member) == null) {
            voteRepository.save(vote);
        }
        else {
            voteRepository.deleteByAnswerAndMember(answer, member);
        }
    }
}
