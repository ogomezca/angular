import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { NetworkErrors } from '../../models/network-errors.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    localStorage.removeItem('token');
  }

  login(username, password) {

    this.loginSubscription = this.authService.authUser(username, password).subscribe(
      (data) => {

        const responseBody = data.json();
        console.log(responseBody);
        localStorage.setItem('token', JSON.stringify(responseBody));

        this.router.navigateByUrl('/select-adscription');

      },
      (err) => {
        if (err._body === NetworkErrors.UNAUTHORIZED) {
          console.log('error');
        }
      }
    );
  }
}
