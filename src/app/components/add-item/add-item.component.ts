import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/Item';
import { ApplicationService } from 'src/app/services/application.service';
import { Subscription} from "rxjs";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Output() addItem: EventEmitter<Item> = new EventEmitter();

  text: string ='';
  ziua: string = '';
  important: boolean = false;
  showAddItem: boolean = false;
  sub: Subscription;

  constructor(private applicationService: ApplicationService) {
    this.sub = this.applicationService.onAdd().subscribe((value) => {
      this.showAddItem = value;
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    if(!this.text) {
      alert('Adaugă o programare!');
      return;
    }

    if(!this.ziua) {
      alert('Adaugă o dată pentru programare!');
      return;
    }

    const newItem = {
      text: this.text,
      ziua: this.ziua,
      important: this.important,
    }

    this.addItem.emit(newItem);

    this.text = '';
    this.ziua = '';
    this.important = false;

  }
}
