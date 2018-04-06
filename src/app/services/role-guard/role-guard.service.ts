import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Observable } from 'rxjs/Observable';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(
    public router: Router,
    private rolesService: RolesService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {


    const currentUserInfo = JSON.parse(localStorage.getItem('token'));
    const currentRole = localStorage.getItem('role');

    const url = state.url.replace(/\//g, '_');

    return this.rolesService.hasPermission(currentUserInfo, url, currentRole);
  }

}
