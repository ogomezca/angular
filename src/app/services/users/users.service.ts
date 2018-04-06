import { Injectable, ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
import { useAnimation } from '@angular/core/src/animation/dsl';
import { User } from '../../models/user.model';
import { NetworkConnections } from '../../models/network-connections.model';

@Injectable()
export class UsersService {

  // Endpoints url's
  private putUserEmployUrl = '/users/putEmployment';
  private postGeneralUserInfoUrl = '/users/temp';
  private usersUrl = '/users';
  private getUsersByAdscriptionUrl = '/usersByAdscription';
  private getUsersByPswStateUrl = '/users/state/pswState';
  private deleteUserUrl = '/users/unsubscribe';
  private fileUploadUrl = '/file';
  private userRolesUrl = '/users/roleAds';

  constructor(private http: Http) { }

  public postGeneralUserInfo(user: User, currentUserInfo: any) {

    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('content-type', 'application/x-www-form-urlencoded');
    headers.append('cache-control', 'no-cache');

    const body = user.urlSearchParamsGeneral();

    return this.http.post(
      NetworkConnections.BASE + this.postGeneralUserInfoUrl,
      body.toString(),
      { headers: headers }
    );

  }

  public putGeneralUserInfo(user: User, currentUserInfo: any) {

    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('content-type', 'application/x-www-form-urlencoded');
    headers.append('cache-control', 'no-cache');

    const body = user.urlSearchParamsPut(user, user.userId);

    return this.http.put(
      NetworkConnections.BASE + this.usersUrl,
      body,
      { headers: headers }
    );
  }

  public getGeneralUsersInfo(currentUserInfo: any) {

    console.log('token => ' + currentUserInfo.token.value);

    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.get(NetworkConnections.BASE + this.usersUrl, { headers: headers });

  }

  public getUsersByAdscription(currentUserInfo: any, currentAdscription: any) {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.get(
      NetworkConnections.BASE + this.getUsersByAdscriptionUrl + '/' + currentAdscription,
      { headers: headers }
    );
  }

  public uploadDeceseFile(formData: FormData, currentUserInfo: any) {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.post(
      NetworkConnections.BASE + this.fileUploadUrl,
      formData,
      { headers: headers }
    );

  }

  public unsubscribeUser(user: User, currentUserInfo: any) {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');
    headers.append('content-type', 'application/x-www-form-urlencoded');

    const body = user.urlSearchParamsUnsubscribeUser();

    return this.http.put(
      NetworkConnections.BASE + this.deleteUserUrl + '/3',
      body.toString(),
      { headers: headers }

    );
  }

  public deleteUser(currentUserInfo: any, userName: any) {

    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.delete(
      NetworkConnections.BASE + this.usersUrl + '/' + userName,
      { headers: headers });
  }

  public deleteGeneralUserInfo(currentUserInfo: any) {

    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.delete(
      NetworkConnections.BASE + this.usersUrl + '/' + currentUserInfo.token.userId,
      { headers: headers });
  }

  public getUsersPswState(currentUserInfo: any) {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.get(
      NetworkConnections.BASE + this.getUsersByPswStateUrl,
      { headers: headers }
    );
  }

  public getRolesByUser(currentUserInfo: any) {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('cache-control', 'no-cache');

    return this.http.get(
      NetworkConnections.BASE + this.userRolesUrl + '/' + currentUserInfo.username + '/0',
      { headers: headers }
    );
  }

}
