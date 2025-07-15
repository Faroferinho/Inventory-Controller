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
        origins = "http://localhost:3000/",
        methods = {
                RequestMethod.GET,
                RequestMethod.PUT,
                RequestMethod.DELETE,
                RequestMethod.POST
        }
    )
public class ItemController implements CRUDController<Item, ItemDTO> {
    @Autowired
    private ItemService service;

    @Override
    @PostMapping(Constants.ITEM)
    public ResponseEntity<Item> create(@RequestBody ItemDTO itemDTO) {
        System.out.println("Item " + itemDTO.getName() + " Cadastrado");

        Item i = service.save(itemDTO);
        return ResponseEntity.ok(i);
    }

    //TODO - Implement "PUT" Method

    @Override
    @GetMapping(Constants.ITEM)
    public ResponseEntity<List<Item>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @Override
    @GetMapping(Constants.ITEM + "{id}")
    public ResponseEntity<Optional<Item>> findById(@PathVariable("id") String id) {
        return ResponseEntity.ok(service.findByID(id));
    }

    @Override
    @DeleteMapping(Constants.ITEM + "{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") String id) {
        service.deleteByID(id);
        return ResponseEntity.noContent().build();
    }
}
