package com.example.wardrobe;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class itemService {

    private List<Item> itemList;

    public itemService() {
        itemList = new ArrayList<>();

        Item item1 = new Item(1,"White Tshirt", 32, "tshirt");
        Item item2 = new Item(2,"Trousers", 26, "trousers");
        Item item3 = new Item(3,"Jacket", 45, "outwear");
        Item item4 = new Item(4,"Black Tshirt", 32, "tshirt");
        Item item5 = new Item(5,"Socks", 59, "underwear");

        itemList.addAll(Arrays.asList(item1, item2, item3, item4, item5));
    }

    public Optional<Item> getItem(Integer id) {
        Optional<Item> optional = Optional.empty();
        for (Item item : itemList) {
            if(id == item.getId()){
                optional = Optional.of(item);
                return optional;
            }
        }
        return optional;
    }

    public List<Item> getItemList() {
        return itemList;
    }
}