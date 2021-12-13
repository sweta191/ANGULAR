import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  counter=1;
  count:BehaviorSubject<number>;
  constructor() { 
    this.count= new BehaviorSubject(this.counter);
  }
  increaseCount()
  {
    this.count.next(++this.counter);
  }
}
