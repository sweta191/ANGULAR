import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() list:any;
  ngOnInit(): void {
  }
  summary:string="some example text some example text. Jane Doe is an architect and engineer"
  
}
