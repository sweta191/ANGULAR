import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature='recipe';
  onNavigate(feature:string)
  {
    this.loadedFeature=feature;


  }

  state=[
    {id:1,name:"jh"},
    {id:2,name:"Mh"},
    {id:3,name:"jm"}
  ]
  city=[
    {id:1,name:"Ranchi"},
    {id:2,name:"Mumbai"},
    {id:3,name:"Srinagar"}
  ]
  OnChangeState(e:any)
  {
    console.log("the event value",(<HTMLInputElement>e.target).value);
    let val=(<HTMLInputElement>e.target).value;
     let res = this.city.find((c: any) => c.id == val); 
    

  }
  
}
