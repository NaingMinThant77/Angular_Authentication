import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;

  constructor(private router: Router) { }

  login(username: string, password: string): Observable<any> {
    this.isUserLoggedIn = username === 'admin' && password === 'admin';
    localStorage.setItem("isUserLoggedIn", this.isUserLoggedIn ? "true" : "false");
    return of(this.isUserLoggedIn).pipe (
      delay(1000),
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem("isUserLoggedIn");
    this.router.navigate(['/home']);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
