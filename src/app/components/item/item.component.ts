import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/Item';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item = {
    ziua: '',
    text: '',
    important: false
  };
  @Output() onDeleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() onImportant: EventEmitter<Item> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onClick(item: Item) {
    this.onDeleteItem.emit(item);
  }

  onDbClick(item: Item) {
    this.onImportant.emit(item);
    console.log(item)
  }
}
