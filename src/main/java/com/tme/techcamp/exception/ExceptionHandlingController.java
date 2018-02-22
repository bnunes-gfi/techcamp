package com.tme.techcamp.exception;

import org.springframework.beans.factory.BeanCreationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.beans.TypeMismatchException;

import org.springframework.web.bind.annotation.ResponseStatus;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

@ControllerAdvice
public class ExceptionHandlingController {

    private static final Logger logger = LoggerFactory.getLogger(ExceptionHandlingController.class);

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ExceptionResponse> resourceNotFound(ResourceNotFoundException ex) {
        ExceptionResponse response = new ExceptionResponse();
        response.setErrorCode("Not Found");
        response.setErrorMessage(ex.getMessage());

        return new ResponseEntity<ExceptionResponse>(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionResponse> invalidInput(MethodArgumentNotValidException ex) {
        ExceptionResponse response = new ExceptionResponse();
        response.setErrorCode("Validation Error");
        response.setErrorMessage("Invalid inputs.");
        //response.setErrorMessage(ex.getMessage());

        return new ResponseEntity<ExceptionResponse>(response, HttpStatus.BAD_REQUEST);
    }


 //   @ExceptionHandler(SQLException.class)
 //   public String handleSQLException(HttpServletRequest request, Exception ex){
 //       logger.info("SQLException Occured:: URL="+request.getRequestURL());
 //       return "database_error";
 //   }

    @ResponseStatus(value=HttpStatus.NOT_FOUND, reason="IOException occured")
    @ExceptionHandler(IOException.class)
    public void handleIOException(){
        logger.error("IOException handler executed");

        //returning 404 error code
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ExceptionResponse> handleIllegalArgumentException(IllegalArgumentException ex){

        logger.error("IllegalArgumentException handler executed");
        logger.error(ex.getCause().getMessage());

        ExceptionResponse response = new ExceptionResponse();
        response.setErrorCode("Error SQL");
        response.setErrorMessage(ex.getMessage());
        // response.setErrors();

        return new ResponseEntity<ExceptionResponse>(response, HttpStatus.NOT_IMPLEMENTED);
    }

    // exception handler class type to match
    @ExceptionHandler(TypeMismatchException.class)
    public void handle(Exception e) { // the parameter class is very essential or spring will not match this handler

        logger.warn("Returning HTTP 400 Bad Request", e);
    }

    @ExceptionHandler(BeanCreationException.class)
    public void handle(BeanCreationException ex) {
        logger.error("Error creating bean", ex.getMessage());
    }

//    @ExceptionHandler(SQLServerException.class)
//    public void handle(SQLServerException ex) {
//        logger.error("Invalid SQL", ex.getMessage());
//    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<ExceptionResponse> handleIllegalArgumentException(NullPointerException ex){

        logger.error("NullPointerException handler executed");
        logger.error(ex.getCause().getMessage());

        ExceptionResponse response = new ExceptionResponse();
        response.setErrorCode("Error desconocido");
        response.setErrorMessage(ex.getMessage());
        // response.setErrors();

        return new ResponseEntity<ExceptionResponse>(response, HttpStatus.NOT_IMPLEMENTED);
    }

}
