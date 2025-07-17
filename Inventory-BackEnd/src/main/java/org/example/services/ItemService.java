package org.example.services;

import org.example.models.Item;
import org.example.models.dto.ItemDTO;
import org.example.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService implements CRUDServices<Item, ItemDTO> {
    @Autowired
    private ItemRepository repository;

    @Override
    public Item save(ItemDTO itemDTO) {
        return repository.save(new Item(itemDTO));
    }

    @Override
    public Item change(Item item) {
        return repository.save(item);
    }

    @Override
    public List<Item> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Item> findByID(String id) {
        return repository.findById(id);
    }

    @Override
    public void deleteByID(String id) {
        repository.deleteById(id);
    }
}
