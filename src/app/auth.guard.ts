import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot,  UrlTree, Router,
  ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor(private router:Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    let val: string | null = localStorage.getItem('isUserLoggedIn');

    if (val != null && val == 'true') {
      this.authService.logout();
      return false;
    } else {
      return true;
    }
  }
}