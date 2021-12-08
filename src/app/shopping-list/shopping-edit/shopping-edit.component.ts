import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name')
  nameRef!: ElementRef;

  @ViewChild('amount')
  amountRef!: ElementRef;


  constructor() { }

  ngOnInit() {
  }
  @Output() liSt=new EventEmitter<Ingredient>()
  
  addToShopping()
  {
    const name=this.nameRef.nativeElement.value;
    const amount=this.amountRef.nativeElement.value;
    const new_list=new Ingredient(name,amount);
    this.liSt.emit(new_list);

  }

}
