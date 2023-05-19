import { Injectable } from '@angular/core';
import { Item } from '../Item';
import { Items } from '../mock-items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  // link to a server
  getItems(): Observable<Item[]> {
    return of(Items);
  }

  deleteItem(item: Item): Observable<Item> {
    return of(item);
  }

  updateItem(item: Item): Observable<Item> {
    return of(item);
  }

  addItem(item: Item): Observable<Item> {
    return of(item);
  }
}
