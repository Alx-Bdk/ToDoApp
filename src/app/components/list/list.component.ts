import { Component, OnInit } from '@angular/core';
import { Item } from "../../Item"
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((list) => {
      this.list = list;
    })
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item).subscribe(()=> {
      this.list = this.list.filter(i => i.id !== item.id)
    })
  }

  onImportant(item: Item) {
    item.important = !item.important;
  }

  addItem(item: Item) {
    this.itemService.addItem(item).subscribe(item => {
      this.list.push(item);
    })
  }
}
