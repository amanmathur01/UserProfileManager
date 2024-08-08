package com.project.Idemia.service.impl;

import com.project.Idemia.custom_exception.PersonNotFound;
import com.project.Idemia.models.Person;
import com.project.Idemia.repository.PersonRepo;
import com.project.Idemia.service.PersonService;
import jakarta.websocket.OnClose;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService {
    @Autowired
    PersonRepo personRepo;
    @Override
    public Person addInfo(Person p) throws DuplicateKeyException {
        try {
            return personRepo.save(p);
        }
        catch (DataIntegrityViolationException e){
             throw new DuplicateKeyException("Email already exists");
        }
    }

    @Override
    public List<Person> getAll() {
        return personRepo.findAll();
    }

    @Override
    public void delete(int id) throws PersonNotFound{
        Person p=personRepo.findById(id).orElse(null);
        if(p==null){
          throw new PersonNotFound("Person not found");
        }
        personRepo.delete(p);
    }

    @Override
    public Person update(Person updates,int id){
        Person p=personRepo.findById(id).orElse(null);
        p.setFirstName(updates.getFirstName());
        p.setLastName(updates.getLastName());
        p.setEmail(updates.getEmail());
        p.setMobileNo(updates.getMobileNo());
        p.setAddress(updates.getAddress());
        p.setDob(updates.getDob());
        p.setGender(updates.getGender());
        personRepo.save(p);
        return p;
    }

    @Override
    public Person getById(int id){
        return personRepo.findById(id).get();
    }
    @Override
    public Person getLastEntry(){
        return personRepo.findTopByOrderByPersonIdDesc();
    }
}
