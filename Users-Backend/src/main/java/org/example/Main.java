package org.example;

//http://localhost:8081/swagger-ui/index.html

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(
        info = @Info(
                title = "API Users",
                version = "1.0",
                description = "This API provides a robust and secure solution for managing user" +
                        " identities within your application, handling everything from initial registration" +
                        " to secure login and ongoing authentication. It offers a standardized way to" +
                        " integrate user management functionalities, allowing your client applications" +
                        " (web, mobile, desktop) to interact seamlessly with your backend for user-related" +
                        " operations."
        )
)
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}