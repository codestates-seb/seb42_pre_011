package com.clone.stackoverflow.tag.mapper;

import com.clone.stackoverflow.tag.dto.TagPostDto;
import com.clone.stackoverflow.tag.dto.TagPostDto.TagPostDtoBuilder;
import com.clone.stackoverflow.tag.dto.TagResponseDto;
import com.clone.stackoverflow.tag.entity.Tag;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-28T17:43:27+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class TagMapperImpl implements TagMapper {

    @Override
    public TagResponseDto tagToTagResponseDto(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        TagResponseDto tagResponseDto = new TagResponseDto();

        if ( tag.getTagId() != null ) {
            tagResponseDto.setTagId( tag.getTagId() );
        }
        tagResponseDto.setTagName( tag.getTagName() );
        tagResponseDto.setTagContent( tag.getTagContent() );

        return tagResponseDto;
    }

    @Override
    public List<TagResponseDto> tagsToTagResponseDtos(List<Tag> tags) {
        if ( tags == null ) {
            return null;
        }

        List<TagResponseDto> list = new ArrayList<TagResponseDto>( tags.size() );
        for ( Tag tag : tags ) {
            list.add( tagToTagResponseDto( tag ) );
        }

        return list;
    }

    @Override
    public List<TagPostDto> tagsToTagSimplePostDtos(List<Tag> tags) {
        if ( tags == null ) {
            return null;
        }

        List<TagPostDto> list = new ArrayList<TagPostDto>( tags.size() );
        for ( Tag tag : tags ) {
            list.add( tagToTagPostDto( tag ) );
        }

        return list;
    }

    protected TagPostDto tagToTagPostDto(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        TagPostDtoBuilder tagPostDto = TagPostDto.builder();

        tagPostDto.tagName( tag.getTagName() );
        tagPostDto.tagContent( tag.getTagContent() );

        return tagPostDto.build();
    }
}
