package com.tme.techcamp.exception;

public class MethodArgumentNotValidException extends RuntimeException {
        private Long resourceId;

    public MethodArgumentNotValidException(Long resourceId, String message) {
            super(message);
            this.resourceId = resourceId;
        }
}
