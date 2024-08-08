package com.project.Idemia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class IdemiaApplication {

	public static void main(String[] args) {
		SpringApplication.run(IdemiaApplication.class, args);
		System.out.println("CONNECTION ESTABLISHED...");
	}

}
