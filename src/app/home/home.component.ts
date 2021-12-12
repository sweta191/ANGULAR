import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  list=["Grapes","Oranges","banana","guava"];
  show_cards:any;
  not_found=false;
  show:any;
  val="";
  
  searchItem(value:any)
  {
    this.val=value;

    this.show_cards=[];
    // for(let i=0;i<this.list.length;i++)
    // {
    //     if(value!="" && this.list[i]==value)
    //     {
    //       this.show="true";
    //       this.show_cards.push(this.list[i]);
    //       break;
          
    //     }
    //     else
    //     {
          
    //     }
      
       
    // }
    this.show_cards = this.list.filter(val => val.toLowerCase().includes(value && value.toLowerCase()))
    console.log("show cards are",this.show_cards);
    
    console.log("In the parent component",value);
    
  }
  
}
