package com.clone.stackoverflow.tag.mapper;
import com.clone.stackoverflow.tag.dto.TagPostDto;
import com.clone.stackoverflow.tag.dto.TagResponseDto;
import com.clone.stackoverflow.tag.entity.Tag;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    TagResponseDto tagToTagResponseDto(Tag tag);

    List<TagResponseDto> tagsToTagResponseDtos(List<Tag> tags);

    List<TagPostDto> tagsToTagSimplePostDtos(List<Tag> tags);
}

