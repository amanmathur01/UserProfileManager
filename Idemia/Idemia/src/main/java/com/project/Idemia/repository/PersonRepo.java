package com.project.Idemia.repository;

import com.project.Idemia.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepo extends JpaRepository<Person,Integer> {
    Person findTopByOrderByPersonIdDesc();
}
