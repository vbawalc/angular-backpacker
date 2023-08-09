package com.example.wardrobe;
public class Item {

    private int id;
    private String name;
    private double weight;
    private String itemType;

    public Item(int id, String name, double weight, String itemType) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.itemType = itemType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getItemType() {
        return itemType;
    }

    public void setItemType(String itemType) {
        this.itemType = itemType;
    }
}