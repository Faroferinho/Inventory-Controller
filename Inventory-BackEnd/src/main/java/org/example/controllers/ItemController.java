package org.example.controllers;

import org.example.models.Item;
import org.example.models.dto.ItemDTO;
import org.example.safety.Constants;
import org.example.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(
        origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS}, allowedHeaders = "*", allowCredentials = "true", maxAge = 3600)
public class ItemController implements CRUDController<Item, ItemDTO> {
    @Autowired
    private ItemService service;

    @Override
    @PostMapping(Constants.ITEM)
    public ResponseEntity<Item> create(ItemDTO itemDTO) {
        Item i = service.save(itemDTO);
        return ResponseEntity.ok(i);
    }

    @Override
    @GetMapping(Constants.ITEM)
    public ResponseEntity<List<Item>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @Override
    @GetMapping(Constants.ITEM + "{id}")
    public ResponseEntity<Optional<Item>> findById(String id) {
        return ResponseEntity.ok(service.findByID(id));
    }

    @Override
    @DeleteMapping(Constants.ITEM + "{id}")
    public ResponseEntity<Void> deleteById(String id) {
        service.deleteByID(id);
        return ResponseEntity.noContent().build();
    }
}
