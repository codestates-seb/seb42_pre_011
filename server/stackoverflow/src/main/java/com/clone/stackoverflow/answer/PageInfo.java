package com.clone.stackoverflow.answer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
public class PageInfo {
    private int page;
    private int size;
    private int totalElement;
    private int totalPages;
}
