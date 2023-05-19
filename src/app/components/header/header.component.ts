import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'To do App';
  showAddItem : boolean | undefined;
  sub: Subscription | undefined;

  constructor (private applicationService: ApplicationService) {
    this.sub = this.applicationService.onAdd().subscribe((value) => {
      this.showAddItem = value;
    })
  }

  ngOnInit(): void {}

  addItem() {
    this.applicationService.addItem();
  }
}
