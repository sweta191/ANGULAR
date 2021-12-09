import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  searchTerm:String='';
  ngOnInit(): void {
  }
  name:any;
  @Output() searchInput=new EventEmitter<String>()
  call($event:any)
  {
    this.name=$event.target.value;
    //console.log("the event value is",this.name);
    this.searchInput.emit(this.name);
  }
}
