export interface Item {
  id: string;
  name: string;
  price: number;
  type: ItemType;
}

export enum ItemType {
  Fruit = "fruit",
  Vegetable = "vegetable"
}
