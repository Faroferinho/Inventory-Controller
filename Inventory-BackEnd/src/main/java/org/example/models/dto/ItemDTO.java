package org.example.models.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ItemDTO {
    private String name;
    private String description;
    private BigDecimal value;
    private int quantity;
    private boolean available;
}
