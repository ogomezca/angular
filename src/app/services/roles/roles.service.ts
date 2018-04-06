import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { NetworkConnections } from '../../models/network-connections.model';
import { Role } from '../../models/role.model';

@Injectable()
export class RolesService {

  private roleScreenUrl = '/roleScreen';
  private rolesUrl = '/role';
  private roleScreenActiveUrl = '/roleScreenActive';

  private roleScreenPermissionUrl = '/isScreenActive';

  private userModules: any;

  constructor(private http: Http) { }

  public hasPermission(currentUserInfo: any, url: any, roleId: any): Observable<boolean> {

    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.get(
      NetworkConnections.BASE + this.roleScreenPermissionUrl + '/' + roleId + '/' + url,
      {headers: headers}
    ).map(
      (res: Response) => {
        const resBody: any = res.json();
        console.log(resBody);
        return resBody.rc;

      },
      (err) => false);

  }

  public getActionsForScreen(currentUserInfo: any, moduleName: any): Observable<any> {

        const headers = new Headers();
        headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
        headers.append('cache-control', 'no-cache');

        const selectedAdscription = localStorage.getItem('adscription');

        console.log('getActionsForScreen reached');

        return this.http.get(
          NetworkConnections.BASE +
          this.roleScreenUrl + '/' +
          currentUserInfo.token.userId + '/' +
          selectedAdscription,
          {headers: headers}
        );

      }

  public getRolesByAdscription(currentUserInfo: any, selectedAdscription: any) {

    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.get(
      NetworkConnections.BASE + this.roleScreenUrl + '/' + currentUserInfo.token.userId + '/' + selectedAdscription,
      {headers: headers} );

  }

  public getAllRoles(currentUserInfo: any) {

        const headers = new Headers();
        headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
        headers.append('cache-control', 'no-cache');

        return this.http.get(
          NetworkConnections.BASE + this.roleScreenUrl + '/' + currentUserInfo.token.userId,
          {headers: headers} );

  }

  public deleteRole(currentUserInfo: any) {

    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.delete(
      NetworkConnections.BASE + this.roleScreenUrl + '/' + currentUserInfo.token.userId,
      {headers: headers} );

  }

  private searchAuthorization(modules: any, route: any) {

    for (let i = 0; i < modules.result[0].screens.length; i++) {

      console.log(modules.result[0].screens[i].moduleName);
      console.log(route);

      if (route === modules.result[0].screens[i].url) {

        return true;
      }
    }

    return false;

  }

  private getActionsFromResponse(modules: any, moduleName: any) {

    console.log('getActionsFromResponse: ' + modules);

    for (let i = 0; i < modules.result[0].screens.length; i++) {

      if (moduleName === modules.result[0].screens[i].moduleName) {

        console.log(modules.result[0].screens[i]);

        console.log(modules.result[0].screens[i].actions);

        return modules.result[0].screens[i].actions;
      }
    }

    return [];
  }

  /* New Methods */

  public getRoles(currentUserInfo: any) {

    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.get(
      NetworkConnections.BASE + this.rolesUrl,
      {headers: headers}
    );
  }

  public getAllScreensByRole(currentUserInfo: any, roleName: any) {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.get(
      NetworkConnections.BASE + this.roleScreenUrl + '/' + roleName,
      {headers: headers}
    );
  }

  public getActiveScreensByRole(currentUserInfo: any, roleId) {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.get(
      NetworkConnections.BASE + this.roleScreenActiveUrl + '/' + roleId,
      {headers: headers}
    );
  }

  public changeActiveScreen(currentUserInfo: any, role: Role) {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    const body = role.urlSearchParamsChnageActiveScreen();

    return this.http.put(
      NetworkConnections.BASE + this.rolesUrl,
      body.toString(),
      {headers: headers}
    );
  }

}
