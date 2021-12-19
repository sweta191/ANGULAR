import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authenticated()
  {
    let id=sessionStorage.getItem("ID");
    let password=sessionStorage.getItem("PASSWORD");
    console.log("credentials are",id,password);
    if(id=="sweta" && password=="sweta")
    {
      return true;
    }
   else 
     return false;
  }
}
