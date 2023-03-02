package com.clone.stackoverflow.question.repository;

import com.clone.stackoverflow.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    Page<Question> findByQuestionTitleContainingOrQuestionContentContaining(String searchTitle, String searchString, Pageable pageable);
}

