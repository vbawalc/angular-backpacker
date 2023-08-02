import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})

export class TotalComponent {
  cartItems: Map<Item, number>;

  constructor(private readonly itemsService: ItemsService) {
    this.cartItems = this.itemsService.getCartItems();
  }

  getTotalPrice(): number {
    return [...this.cartItems].reduce((totalCost, [item, quantity]) => totalCost + item.price * quantity, 0);
  }
} 
