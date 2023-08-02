import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Item } from './models/item';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private _items: Promise<Item[]> = this.getAllItems();
  cartItems: Map<Item, number>;
  
  constructor(private readonly http: HttpClient) {
    this.cartItems = new Map<Item, number>();
  }

  getCartItems(): Map<Item, number> {
    return this.cartItems;
  }

  addItem(item: Item) {
    if(this.cartItems.has(item))
      this.cartItems.set(item, this.cartItems.get(item) as number + 1);
    else
      this.cartItems.set(item, 1);
    return this.cartItems.get(item)
  }

  removeItem(item: Item): boolean{
    if(!this.cartItems.has(item)) return false;
    const currentValue = this.cartItems.get(item) as number;
    this.cartItems.set(item, currentValue - 1);
    if(currentValue === 1) this.cartItems.delete(item)
    return true
  }

  async getAllItems(): Promise<Item[]> {
    const response = await firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}groceries`)
    );
    return response;
  }
}
