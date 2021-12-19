import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private auth:AuthService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):| boolean{
      let isAuthenticated=this.auth.authenticated();
    if(isAuthenticated)
    {
      console.log("welcome");
       

    }
    else
    {
      this.route.navigate(['/auth']);
    }
    return true;
  }
  
}
