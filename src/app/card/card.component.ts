import { Component, Input, OnInit } from '@angular/core';
import { CartServiceService } from '../shared/cart-service.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  count: any;
  constructor(private cart:CartServiceService) { }
  
  ngOnInit(): void {

    this.cart.count.subscribe((c)=>
    {
      this.count=c;

    })
  }
  plusCount()
  {
    this.cart.increaseCount();
    
  }
  @Input() list:any;
  
  summary:string="some example text some example text. Jane Doe is an architect and engineer"
  
}
