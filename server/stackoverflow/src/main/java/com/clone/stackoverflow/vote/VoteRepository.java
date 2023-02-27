package com.clone.stackoverflow.vote;

import com.clone.stackoverflow.answer.entity.Answer;
import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {

    Vote findByAnswerAndMember(Answer answer, Member member);
    Long countAllByAnswerAndVoteTypeNot(Answer answer, Vote.VoteType voteType);
    @Transactional
    void deleteByAnswerAndMember(Answer answer, Member member);
}
