package com.project.Idemia.service;

import com.project.Idemia.models.Person;
import jakarta.annotation.security.PermitAll;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface PersonService {
    public Person addInfo(Person p);
    public List<Person> getAll();

    public void delete(int id);

    public Person update(Person newPerson, int id);

    public Person getById(int id);

    public Person getLastEntry();
}
