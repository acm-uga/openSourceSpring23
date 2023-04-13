package com.uga.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.google.cloud.spring.data.firestore.repository.config.EnableReactiveFirestoreRepositories;

@SpringBootApplication
@EnableReactiveFirestoreRepositories("com.uga.backend.repository")
@ComponentScan("com.uga.backend.controller")
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
