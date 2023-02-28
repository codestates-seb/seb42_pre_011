package com.clone.stackoverflow.tag.repository;

import com.clone.stackoverflow.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface TagRepository extends JpaRepository<Tag, Long> {
    public Optional<Tag> findByTagName(String tagName);
}
