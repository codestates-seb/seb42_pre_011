package com.clone.stackoverflow.answer.repository;
import com.clone.stackoverflow.question.entity.Question;
import lombok.RequiredArgsConstructor;
import com.clone.stackoverflow.answer.entity.Answer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository

public interface AnswerRepository extends JpaRepository<Answer,Long> {
    Page<Answer> findByAnswerContentContaining(String searchString, Pageable pageable);
    /*
   {
    public final AnswerRepository answerRepository;

    @Transactional
    public Long save(final Answer answer) {
        Answer getAnswer = answerRepository.save(answer);
        return getAnswer.getId();
    }

}
*/

}