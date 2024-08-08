package com.project.Idemia.controller;

import com.project.Idemia.models.Person;
import com.project.Idemia.service.impl.PersonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/records")
public class Record {
    @Autowired
    PersonServiceImpl personService;
    @GetMapping()
    public ResponseEntity<?> getPersons(){
        return ResponseEntity.ok(personService.getAll());
    }

    @DeleteMapping("/delete/{personId}")
    public ResponseEntity<?> delete(@PathVariable("personId") int id){
        personService.delete(id);
        return ResponseEntity.ok("Deleted!");
    }

    @PutMapping("/update/{personId}")
    public ResponseEntity<?> update(@RequestBody Person p, @PathVariable("personId") int id){
        Person updated=personService.update(p,id);
        return ResponseEntity.ok(updated);
    }
    @GetMapping("/update/{personId}")
    public ResponseEntity<?> getById(@PathVariable("personId") int id){
        return ResponseEntity.ok(personService.getById(id));
    }
}
