package org.example.models;

import lombok.Getter;
import lombok.Setter;
import org.example.models.dto.ItemDTO;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document
@Getter @Setter
public class Item {
    private String id;
    private String name;
    private String description;
    private BigDecimal value;
    private int quantity;
    private boolean available;

    public Item(){

    }

    public Item(String name, String description, BigDecimal value, int quantity, boolean available){
        this.name = name;
        this.description = description;
        this.value = value;
        this.quantity = quantity;
        this.available = available;
    }

    public Item(ItemDTO dto){
        name = dto.getName();
        description = dto.getDescription();
        value = dto.getValue();
        quantity = dto.getQuantity();
        available = dto.isAvailable();
    }
}
