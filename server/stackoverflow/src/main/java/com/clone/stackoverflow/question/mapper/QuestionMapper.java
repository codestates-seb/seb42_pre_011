package com.clone.stackoverflow.question.mapper;

import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.member.repository.MemberRepository;
import com.clone.stackoverflow.question.dto.QuestionPatchDto;
import com.clone.stackoverflow.question.dto.QuestionPostDto;
import com.clone.stackoverflow.question.dto.QuestionResponseDto;
import com.clone.stackoverflow.question.entity.Question;
import com.clone.stackoverflow.question.repository.QuestionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@AllArgsConstructor
@Component
public class QuestionMapper {
    private MemberRepository memberRepository;
    private final QuestionRepository questionRepository;

    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        question.setQuestionContent(questionPostDto.getQuestionContent());
       // question.setMember(questionPostDto.getMemberId());
        //태그
        return question;
    }

    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        Member member = memberRepository.findById(questionPatchDto.getMemberID()).get();
        Question question = questionRepository.findById(questionPatchDto.getQuestionID()).get();
        question.setMember(member);
        if(questionPatchDto.getQuestionContent() != null) {
            question.setQuestionContent(questionPatchDto.getQuestionContent());
        }
        //태그
        return question;
    }

    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setQuestionContent(question.getQuestionContent());
        questionResponseDto.setGroupId(question.getGroupId());
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setModifiedAt(question.getModifiedAt());
        questionResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionResponseDto.setLikeCount(question.getLikeCount());
        questionResponseDto.setHateCount(question.getHateCount());
        questionResponseDto.setViewCount(question.getViewCount());
    //    questionResponseDto.setMemberId(question.getMember().getUser_id());
    //    questionResponseDto.setIsVote();
        return questionResponseDto;
    }

    public List<QuestionResponseDto> questionsToQuestionResponseDto(List<Question> questions) {
        if(questions == null) return null;

        List<QuestionResponseDto> list = new ArrayList<>(questions.size());
        for(Question question : questions) {
            list.add(questionToQuestionResponseDto(question));
        }
        return list;
    }
}
