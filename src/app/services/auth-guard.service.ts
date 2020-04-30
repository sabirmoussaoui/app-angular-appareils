import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private route : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean> |Promise<boolean>|boolean {
       if(this.auth.isAuth) return true; 
       else return this.route.navigate(['/auth'])
    }}