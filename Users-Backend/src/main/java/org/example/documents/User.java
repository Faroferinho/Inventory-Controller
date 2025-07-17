package org.example.documents;

import lombok.Getter;
import lombok.Setter;
import org.example.documents.DTOs.UserDTO;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter @Setter
public class User {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;

    public User(){

    }

    public User(String name, String email, String password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public User(UserDTO dto){
        name = dto.getName();
        email = dto.getEmail();
        password = dto.getPassword();
    }
}
