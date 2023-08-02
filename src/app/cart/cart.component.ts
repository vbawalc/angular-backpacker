import { Component, Input, OnInit} from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../models/item'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  constructor(private readonly itemsService: ItemsService) {}

  addItem(item: Item): void {
    this.itemsService.addItem(item);
  }

  removeItem(item: Item): void {
    this.itemsService.removeItem(item);
  }

  getItemCount(item: Item) {
    return this.itemsService.getCartItems().get(item);
  }

  getItems(): Item[] {
    return Array.from(this.itemsService.getCartItems().keys());
  }
}
