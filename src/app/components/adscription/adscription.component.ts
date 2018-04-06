import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-adscription',
  templateUrl: './adscription.component.html',
  styleUrls: ['./adscription.component.css']
})
export class AdscriptionComponent implements OnInit {

  private roles: any;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {

    const currentUserInfo = JSON.parse(localStorage.getItem('token'));

    this.usersService.getRolesByUser(currentUserInfo).subscribe(
      (successResponse) => {
        const body = successResponse.json();
        if (body.rc === '00') {
          this.roles = body.result;
        }
        console.log(body);
      },
      (errorResponse) => {
        console.log(errorResponse._body);
      }
    );
  }

  setSelectedItem($event, item) {
    localStorage.setItem('adscription', item.adscriptionId);
    localStorage.setItem('role', item.roleId);
    this.router.navigateByUrl('/main');
  }

}
