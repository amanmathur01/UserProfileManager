package com.project.Idemia.controller;

import com.project.Idemia.models.Person;
import com.project.Idemia.service.impl.PersonServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class Enrollment {
    @Autowired
    PersonServiceImpl personService;

    @PostMapping("/enrollment")
    public ResponseEntity<?> addInfo(@Valid @RequestBody Person person) throws DuplicateKeyException{
        try{
            Person newPerson=personService.addInfo(person);
            return new ResponseEntity<>(newPerson, HttpStatus.CREATED);
        }
        catch (DuplicateKeyException e) {
           throw new DuplicateKeyException(e.getMessage());
        }
    }
}
