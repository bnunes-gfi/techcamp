package com.tme.techcamp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.tme.techcamp")
@EnableJpaRepositories(basePackages = "com.tme.techcamp.repository")
@EntityScan(basePackages = "com.tme.techcamp.model")
public class TechCampApplication {

	public static void main(String[] args) {

		SpringApplication.run(TechCampApplication.class, args);
	}
}
