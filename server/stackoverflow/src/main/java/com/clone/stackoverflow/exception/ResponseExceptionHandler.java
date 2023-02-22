package com.clone.stackoverflow.exception;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class ResponseExceptionHandler {

    @ExceptionHandler(BusinessLogicException.class)
    public ResponseEntity exceptionHandler(BusinessLogicException e) {
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(e.getMessage());
        HttpStatus code = e.getExceptionCode().getCode();
        return new ResponseEntity<>(errorResponseDto, code);
    }
}
