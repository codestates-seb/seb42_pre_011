package com.clone.stackoverflow.answer.service;
import com.clone.stackoverflow.answer.entity.Answer;
import com.clone.stackoverflow.answer.repository.AnswerRepository;
import com.clone.stackoverflow.exception.BusinessLogicException;
import com.clone.stackoverflow.exception.ExceptionCode;
import com.clone.stackoverflow.question.entity.Question;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Optional;


@Service
@Transactional
@RequiredArgsConstructor
public class
AnswerService {
    private final AnswerRepository answerRepository;

    public void saveAnswer(Answer answer) {
        answer.setCreatedAt(LocalDateTime.now());
        answerRepository.save(answer);
    }

    public void deleteAnswer(Long answerId, Long memberId) {
        Answer answer = answerRepository.findById(answerId).get();
        if (answer.getMember().getMemberId().equals(memberId)) {
            answerRepository.delete(answer);
        } else {
            throw new BusinessLogicException(ExceptionCode.NOT_ALLOWED);
        }
    }

    public void patchAnswer(Answer answer, Long memberId) {
        if (answer.getMember().getMemberId().equals(memberId)) { //본인이 쓴 글 맞는지 확인
            answer.setModifiedAt(LocalDateTime.now());
            answerRepository.save(answer);
        } else {
            throw new BusinessLogicException(ExceptionCode.NOT_ALLOWED);
        }
    }
}