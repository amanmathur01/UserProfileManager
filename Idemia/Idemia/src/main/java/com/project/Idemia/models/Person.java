package com.project.Idemia.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int personId;

    @NotEmpty(message = "First Name is mandatory")
    private String firstName;

    @NotEmpty(message = "Last Name is mandatory")
    private String lastName;

    @Email
    @Column(unique = true)
    private String email;

    @NotEmpty
    private String address;

    @Size(min=10,max=10 , message = "Mobile no. must contain 10 digits")
    private String mobileNo;


    @NotEmpty
    private String gender;

    @NotEmpty(message = "DOB must mentioned")
    private String dob;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "img_Id")
    private PersonImg img;
}
