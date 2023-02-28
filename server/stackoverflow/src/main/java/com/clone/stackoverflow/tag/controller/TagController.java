package com.clone.stackoverflow.tag.controller;

import com.clone.stackoverflow.tag.dto.TagResponseDto;
import com.clone.stackoverflow.tag.entity.Tag;
import com.clone.stackoverflow.tag.mapper.TagMapper;
import com.clone.stackoverflow.tag.service.TagService;
import com.clone.stackoverflow.tag.repository.TagRepository;
import com.clone.stackoverflow.dto.SingleResponseDto;
import com.clone.stackoverflow.dto.MultiResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@Validated
@RequestMapping("/tags")
public class TagController {
    private final TagService tagService;
    private final TagMapper mapper;

    public TagController(TagService tagService, TagMapper mapper) {
        this.tagService = tagService;
        this.mapper = mapper;
    }

    @GetMapping
    public ResponseEntity getAllTags(@RequestParam int page , @RequestParam int size) { //페이징(여러개중에 잘라서 일부분만 보내줌)
        Page<Tag> tag = tagService.getAllTags(page-1, size);
        List<Tag> content = tag.getContent();
        return new ResponseEntity(new MultiResponseDto<>(mapper.tagsToTagResponseDtos(content),tag), HttpStatus.OK);
    }
}

//클라리언트json - 태그로 변환

