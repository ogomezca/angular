import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { WorkExperience } from '../../../models/declaration/work-experience.model.ts';
import { NetworkConnections } from '../../../models/network-connections.model';

@Injectable()
export class WorkExperienceService {

  /* Endpoints URL's */
  private postWorkExperienceURL = '/workExperience';

  constructor(private http: Http) { }

  /* In this space, we declare the methods that will do the logic for each service */

  // Posting work experience method
  public postWorkExperience (we: WorkExperience, currentUserInfo: any) {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + currentUserInfo.token.value);
    headers.append('content-type', 'application/x-www-form-urlencoded');
    headers.append('cache-control', 'no-cache');

    const body = we.URLSearchParamsGeneral();

    return this.http.post(
      NetworkConnections.BASE + this.postWorkExperienceURL,
      body.toString(),
      { headers: headers }
    );
  }

}
