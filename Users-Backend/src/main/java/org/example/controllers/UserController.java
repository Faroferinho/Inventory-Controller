package org.example.controllers;

import org.example.documents.DTOs.UserDTO;
import org.example.documents.User;
import org.example.safety.Constants;
import org.example.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(
        origins = "http://localhost:3000",
        methods = {
                RequestMethod.GET,
                RequestMethod.PUT,
                RequestMethod.POST,
                RequestMethod.DELETE
        }
)
public class UserController implements CRUDController<User, UserDTO> {
    @Autowired
    private UserServices service;

    @Override
    @PostMapping(Constants.USER)
    public ResponseEntity<User> create(@RequestBody UserDTO userDTO) {
        User savedUser = service.save(userDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    @Override
    @PutMapping(Constants.USER + "{id}")
    public ResponseEntity<User> update(@PathVariable String id, @RequestBody UserDTO userDTO) {
        User updatedUser = new User(userDTO);

        updatedUser.setId(id);

        updatedUser = service.change(updatedUser);

        return ResponseEntity.status(HttpStatus.OK).body(updatedUser);
    }

    @Override
    @GetMapping(Constants.USER)
    public ResponseEntity<List<User>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @Override
    @GetMapping(Constants.USER + "{id}")
    public ResponseEntity<Optional<User>> findById(@PathVariable String id) {
        return ResponseEntity.ok(service.findByID(id));
    }

    @Override
    public ResponseEntity<Void> deleteById(@PathVariable String id) {
        service.deleteByID(id);
        return ResponseEntity.noContent().build();
    }
}
