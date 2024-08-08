package com.project.Idemia.controller;

import com.project.Idemia.custom_exception.PersonNotFound;
import com.project.Idemia.models.Person;
import com.project.Idemia.service.impl.PersonServiceImpl;
import com.project.Idemia.util.FileUploader;
import jakarta.persistence.Persistence;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
public class Biometric {
    @Autowired
     FileUploader fileUploader;

    @Autowired
    PersonServiceImpl personService;

    @GetMapping("/biometric")
    @Transactional
    public Person getLastEntry(){
        return personService.getLastEntry();
    }


    @PostMapping("/biometric/{personId}")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file,@PathVariable("personId") int id) throws PersonNotFound {
        System.out.println("Received file: " + file.getOriginalFilename() + "Person id: "+id);
        try{
            if(file.isEmpty()){
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong..");
            }

            String fileType=file.getContentType();

            if(!fileType.equals("image/jpeg") && !fileType.equals("image/png")){
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Only jpeg/jpg/png content are allowed");
            }
            Boolean flag=fileUploader.upload(file,id);
            if(flag){
                return ResponseEntity.ok("Image uploaded!");
            }

        }catch (PersonNotFound e){
           throw new PersonNotFound(e.getMessage());
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong try again!!!....");
    }
}
