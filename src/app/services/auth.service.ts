import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  isUserAuthenticated: boolean;

  constructor() { 
    this.isUserAuthenticated = false;
  }

  login(email: string, password: string) {
    if (email == 'admin@kinabalumakers.com' && password == 'admin') {
      console.log('Credentials Valid');
      this.isUserAuthenticated = true;
      this.authChange.next(true);
    }
  }
}
