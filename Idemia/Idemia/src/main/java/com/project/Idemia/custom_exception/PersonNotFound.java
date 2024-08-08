package com.project.Idemia.custom_exception;

public class PersonNotFound extends RuntimeException{
    public PersonNotFound(String mssg){
        super(mssg);
    }
}
