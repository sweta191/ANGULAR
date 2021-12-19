import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('ID');
    sessionStorage.removeItem('PASSWORD');
  }
  data={id:'',password:''}
  login()
  {
    
    sessionStorage.setItem("ID",this.data.id);
    sessionStorage.setItem("PASSWORD",this.data.password);
    if(this.data.id=='sweta' &&  this.data.password=='sweta')
    {
      this.route.navigate(['/food']);
    }
    else
        {
           console.log("Invalid login")
        }
  }

}
