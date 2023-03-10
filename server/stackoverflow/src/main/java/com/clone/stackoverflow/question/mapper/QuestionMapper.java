package com.clone.stackoverflow.question.mapper;

import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.member.repository.MemberRepository;
import com.clone.stackoverflow.question.dto.QuestionPatchDto;
import com.clone.stackoverflow.question.dto.QuestionPostDto;
import com.clone.stackoverflow.question.dto.QuestionDto;
import com.clone.stackoverflow.question.entity.Question;
import com.clone.stackoverflow.question.repository.QuestionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Component
public class QuestionMapper {
    private MemberRepository memberRepository;
    private final QuestionRepository questionRepository;

    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        question.setQuestionContent(questionPostDto.getQuestionContent());
        question.setQuestionTitle(questionPostDto.getQuestionTitle());

        Member member = memberRepository.findById(questionPostDto.getMemberId()).get();
        question.setMember(member);
        //태그
        return question;
    }

    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto, Long questionId) {
        Question question = questionRepository.findById(questionId).get();
        if(questionPatchDto.getQuestionTitle() != null) {
            question.setQuestionTitle(questionPatchDto.getQuestionTitle());
        }
        if(questionPatchDto.getQuestionContent() != null) {
            question.setQuestionContent(questionPatchDto.getQuestionContent());
        }
        //태그
        return question;
    }

    public QuestionDto questionToQuestionResponseDto(Question question) {
        QuestionDto questionDto = new QuestionDto();
        questionDto.setQuestionId(question.getQuestionId());
        questionDto.setQuestionTitle(question.getQuestionTitle());
        questionDto.setQuestionContent(question.getQuestionContent());
        questionDto.setGroupId(question.getGroupId());
        questionDto.setName(question.getMember().getName());
        questionDto.setCreatedAt(question.getCreatedAt());
        questionDto.setModifiedAt(question.getModifiedAt());
        questionDto.setQuestionStatus(question.getQuestionStatus());
        questionDto.setLikeCount(question.getLikeCount());
        questionDto.setHateCount(question.getHateCount());
        questionDto.setViewCount(question.getViewCount());
        questionDto.setMemberId(question.getMember().getMemberId());
    //    questionDto.setIsVote();
        return questionDto;
    }

    public List<QuestionDto> questionsToQuestionResponseDto(List<Question> questions) {
        if(questions == null) return null;

        List<QuestionDto> list = new ArrayList<>(questions.size());
        for(Question question : questions) {
            list.add(questionToQuestionResponseDto(question));
        }
        return list;
    }
}
