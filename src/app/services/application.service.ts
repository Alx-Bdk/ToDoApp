import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private addItemForm: boolean = false; 
  private subject = new Subject<any>();

  constructor() { }

  addItem(): void {
    this.addItemForm = !this.addItemForm;
    this.subject.next(this.addItemForm);
  }

  onAdd(): Observable<any> {
    return this.subject.asObservable();
  }
}
