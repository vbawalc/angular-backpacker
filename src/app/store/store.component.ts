import { Component, OnInit, Output } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item, ItemType } from '../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  items: any
  sort: string = 'name'
  filterType: ItemType | null = null;


  constructor(private readonly itemsService: ItemsService) { }

  async ngOnInit() {
    this.items = await this.itemsService.getAllItems();
  }
  
  addItem(item: Item): void {
    this.itemsService.addItem(item);
  }

  changeSort(filter: string){
    this.sort=filter
  }
  
  toggleChangeSortType(){
    this.sort = this.sort === 'name' ? 'price' : 'name';
  }

  async toggleFilterByType(): Promise<void> {
    if (this.filterType === null) {
      this.filterType = ItemType.Fruit;
    } else if (this.filterType === ItemType.Fruit) {
      this.filterType = ItemType.Vegetable;
    } else {
      this.filterType = null;
    }
    await this.getFilteredItems();
  }

  async getFilteredItems() {
    this.items = await this.itemsService.getItemsByType(this.filterType);
  }

}
