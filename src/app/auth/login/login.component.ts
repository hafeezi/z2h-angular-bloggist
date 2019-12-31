import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginSubscription = new Subscription();

  constructor(public router: Router, public auth: AuthService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.loginSubscription = this.auth.authChange.subscribe( authChange => {
      console.log('Auth Changed');
      if (authChange) {
        this.router.navigateByUrl('/dashboard');
      } else {
        console.log('Username or Password is invalid');
      }
    })
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.auth.login(f.value.email, f.value.password);
    }
  }

}
