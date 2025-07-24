package org.example.controllers;

import org.example.documents.DTOs.LogInDTO;
import org.example.documents.DTOs.ResponseToken;
import org.example.documents.DTOs.UserDTO;
import org.example.documents.User;
import org.example.safety.Constants;
import org.example.safety.JWTTokenProvider;
import org.example.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(
        origins = "http://localhost:3000"
)
public class LoginController {
    @Autowired
    private JWTTokenProvider provider;
    @Autowired
    private UserService service;

    private HashMap<String, String> fillUserList(){
        HashMap<String, String> userList = new HashMap<>();
        List<User> users = service.findAll();

        for(User u : users){
            System.out.println("email: " + u.getEmail() + "\n Password: " + u.getPassword() + "\n");
            userList.put(u.getEmail(), u.getPassword());
        }

        return userList;
    }

    @PostMapping(Constants.LOGIN)
    public ResponseToken login(@RequestBody LogInDTO dto){
        HashMap<String, String> userList = fillUserList();

        if(userList.containsKey(dto.getUsername())){
            if (userList.get(dto.getUsername()).equals(dto.getPassword())){
                String token = provider.tokenGenerator(dto.getUsername());

                return new ResponseToken("Authorized", token);
            }
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid User and/or Password");
    }

    @PostMapping(Constants.REGISTER)
    public ResponseToken register(@RequestBody UserDTO dto){
        HashMap<String, String> userList = fillUserList();

        if(!userList.containsKey(dto.getEmail())){
            service.save(dto);

            String token = provider.tokenGenerator(dto.getEmail());

            return new ResponseToken("Authorized", token);
        }
        return null;
    }
}
