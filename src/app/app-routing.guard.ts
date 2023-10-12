import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){
  
  }
  
  userData: User[] = [];

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user: any = sessionStorage.getItem('userData')
    this.userData = JSON.parse(user)
    console.log("salt: ",user, "stringified: ",this.userData);

    if (this.userData) {
      return true; 
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
