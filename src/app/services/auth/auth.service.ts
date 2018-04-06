import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NetworkConnections } from '../../models/network-connections.model';
import { User } from '../../models/user.model';

@Injectable()
export class AuthService {

    private authUserUrl = '/users/auth';
    private changePasswordUrl = '/passwordChange';
    private assignPasswordUrl = '/passwordAssign';

  constructor(private  http: Http) { }

  public authUser(username, password) {

      const headers = new Headers();
      headers.append('authorization', 'Basic ' + btoa(username + ':' + password));
      headers.append('content-type', 'application/x-www-form-urlencoded');
      headers.append('cache-control', 'no-cache');

      const body = {username, password};

      console.log(body);
      console.log(headers);

      return this.http.post(NetworkConnections.BASE + this.authUserUrl, body, {headers: headers});
  }

  public changePassword(currentUserInfo: any, user: User) {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('content-type', 'application/x-www-form-urlencoded');
    headers.append('cache-control', 'no-cache');

    const body = user.urlSearchParamsChangePsw();

    return this.http.patch(
      NetworkConnections.BASE + this.changePasswordUrl + '/' + currentUserInfo.token.userId,
      body.toString(),
      {headers: headers}
    );

  }

  public assignPassword (currentUserInfo: any, user: User) {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('content-type', 'application/x-www-form-urlencoded');
    headers.append('cache-control', 'no-cache');

    const body = '';

    return this.http.patch(
      NetworkConnections.BASE + this.assignPasswordUrl + '/' + user._id,
      body,
      {headers: headers}
    );
  }

}
