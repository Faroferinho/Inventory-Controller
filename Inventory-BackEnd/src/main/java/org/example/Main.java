package org.example;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

//http://localhost:8080/swagger-ui/index.html

@SpringBootApplication
@OpenAPIDefinition(
        info = @Info(
                title = "API Inventory",
                version = "1.0",
                description = "A Inventory, Stock and Purchase management system based on Java Spring-Boot," +
                        " this is designed to streamline and optimize the entire lifecycle of an organization assets," +
                        " from acquirement to use."
        )
)
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}