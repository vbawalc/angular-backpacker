import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { Observable, of } from 'rxjs';
import items from '../items.json';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  #items: Item[] = items;

  items$: Observable<Item[]> = of(this.#items);

  constructor() {}
}
