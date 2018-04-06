import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { RolesService } from '../../services/roles/roles.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  private currentUserInfo: any;

  constructor(
    public location: Location,
    private rolesService: RolesService) {}

    ngOnInit() {

    }

    isMap(path) {

      let titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if (path === titlee) {
          return false;
      } else {

        return true;
      }
    }

}
