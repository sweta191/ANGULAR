import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:any;
  name_sweta:any;
  name_austin:any;
  name_john:any;
  constructor() { }

  ngOnInit(): void {
  }
  call($event:any)
  {
    this.name=$event.target.value;
    console.log("the event value is",this.name);
    if(this.name!=" ")
    {
          if(this.name == "sweta")
          {
            this.name_sweta="true";
            
          }

          else if(this.name =="john")
          {
            this.name_john="true";
          }

          else
          {
            this.name_austin="true";
          }   

    }
    else
    {
      console.log("in the else part",this.name_austin);
        this.name_sweta="false";
        this.name_john="false";
        this.name_austin="false";
    }
    
    

  }

}
