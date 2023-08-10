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
    this.cartItems = this.itemsService.getLuggageItems();
  }

  getTotalWeight(): number {
    return [...this.cartItems].reduce((totalWeight, [item, quantity]) => totalWeight + item.weight * quantity, 0);
  }

  isLuggageFree(): boolean {
    if (this.getTotalWeight() < 10){
      return true;
    }
    else
    return false;
  }
} 
