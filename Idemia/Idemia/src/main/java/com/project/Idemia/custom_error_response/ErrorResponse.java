package com.project.Idemia.custom_error_response;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Setter
@Getter
public class ErrorResponse {
    private String error;
    private String message;
    private HttpStatus status;
    private LocalDateTime timestamp;

    public ErrorResponse(String error, String message, HttpStatus status) {
        this.error = error;
        this.message = message;
        this.status = status;
        this.timestamp = LocalDateTime.now();
    }

}
