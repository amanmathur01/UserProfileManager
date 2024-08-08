package com.project.Idemia.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class PersonImg {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int imgId;

    @Lob
    @Column(name = "base64_image", columnDefinition = "TEXT")
    private String base64Image;
}