package com.project.Idemia.error_handler;

import com.project.Idemia.custom_error_response.ErrorResponse;
import com.project.Idemia.custom_exception.PersonNotFound;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalHandler {
    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<?> handleDuplicate(DuplicateKeyException ex){
        ErrorResponse errorResponse=new ErrorResponse("Duplicate Key Error",
                ex.getMessage(),
                HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(errorResponse,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(PersonNotFound.class)
    public ResponseEntity<?> handleError(PersonNotFound ex){
        ErrorResponse errorResponse=new ErrorResponse(
                "Resource not found Error",
                ex.getMessage(),
                HttpStatus.NOT_FOUND
        );

        return new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    }
}
