package com.clone.stackoverflow.answer.repository;
import lombok.RequiredArgsConstructor;
import com.clone.stackoverflow.answer.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
@Service
@RequiredArgsConstructor


public interface AnswerRepository extends JpaRepository<Answer,Long> {

        @Override
        Optional<Answer> findById(Long aLong);
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