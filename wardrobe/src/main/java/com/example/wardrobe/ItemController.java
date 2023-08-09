package com.example.wardrobe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ItemController {

    private final itemService itemService;


    @Autowired
    public ItemController(itemService itemService){
        this.itemService = itemService;
    }

    @GetMapping("/item")
    public Item getItem(@RequestParam Integer id){
        Optional<Item> item = itemService.getItem(id);
        return (Item) item.orElse(null);
    }

    @GetMapping("/items")
    public List<Item> getItems(){
        return itemService.getItemList();
    }
}