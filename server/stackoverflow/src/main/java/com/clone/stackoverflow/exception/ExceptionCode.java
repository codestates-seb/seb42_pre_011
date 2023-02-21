package com.clone.stackoverflow.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(HttpStatus.NOT_FOUND, "Member not found"),
    MEMBER_EXISTS(HttpStatus.CONFLICT, "Member exists"),
    NOT_ALLOWED(HttpStatus.UNAUTHORIZED, "You are not allowed to delete");

    @Getter
    private HttpStatus code;

    @Getter
    private String message;

    ExceptionCode(HttpStatus code, String message) {
        this.code = code;
        this.message = message;
    }
}
