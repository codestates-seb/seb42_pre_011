package com.clone.stackoverflow.tag.service;

import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.question.entity.Question;
import com.clone.stackoverflow.tag.entity.Tag;
import com.clone.stackoverflow.tag.repository.TagRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public List<Tag> createTagByName(List<String> tagNames) {
        return tagNames.stream()
                .filter(tag -> !tag.isEmpty())
                .map(String::trim)
                .map(tag -> new Tag(tag, ""))
                .map(this::verifyTag).collect(Collectors.toList());
    }

    public Page<Tag> getAllTags(int page, int size) {

        return tagRepository.findAll(PageRequest.of(page, size));
    }

    private Tag verifyTag(Tag tag) {
        Optional<Tag> optionalTag = tagRepository.findByTagName(tag.getTagName());
        return optionalTag.orElseGet(() -> tagRepository.save(tag));
    }
    /*
    public Page<Question> findAllQuestions(int page, String sortBy, String sortDir) {
        PageRequest pageRequest;
        if(sortDir.equals("ASC")) {
            pageRequest = PageRequest.of(page, 10, Sort.by(sortBy).ascending());
        }
        else {
            pageRequest = PageRequest.of(page, 10, Sort.by(sortBy).descending());
        }
        return questionRepository.findAll(pageRequest);
    }*/
}
