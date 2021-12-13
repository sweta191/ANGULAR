import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../shared/cart-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private cart:CartServiceService) { }
  count:any;
  ngOnInit(): void {
    this.cart.count.subscribe((c)=>
    {
      this.count=c;

    })
  }
  
  list:Array<string>=["Grapes","Oranges","banana","guava"];
  show_cards:Array<string>=[];
  not_found:Boolean=false;
  val:string="";
  show_error:Boolean=false;
  searchItem(value:any)
  {
    this.val=value;
    this.show_cards = this.list.filter(val => val.toLowerCase().includes(value && value.toLowerCase()));
    if(this.show_cards.length==0)
    {
      console.log("empty");
      this.show_error=true;

    }
    else
    {
       this.show_error=false;
    }
    
  }

  
}
