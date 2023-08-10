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

        Item item1 = new Item(1,"White Tshirt", 0.4, "tshirt");
        Item item2 = new Item(2,"Trousers", 1, "trousers");
        Item item3 = new Item(3,"Jacket", 1.2, "outwear");
        Item item4 = new Item(4,"Black Tshirt", 0.4, "tshirt");
        Item item5 = new Item(5,"Socks", 0.1, "underwear");
        Item item6 = new Item(6,"Underwear", 0.1, "underwear");
        Item item7 = new Item(7,"Hoodie", 0.9, "outwear");

        itemList.addAll(Arrays.asList(item1, item2, item3, item4, item5, item6, item7));
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
