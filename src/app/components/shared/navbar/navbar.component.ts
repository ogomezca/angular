import { Component, OnInit, ElementRef } from '@angular/core';
// import { ROUTES } from '../../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
// import { UsersService } from 'app/services/users/users.service';
import { Router } from '@angular/router';

@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(
        location: Location,
        private element: ElementRef,
        // private usersService: UsersService,
        private router: Router) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit() {
      // this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    logout() {
        console.log('logout');
        this.router.navigateByUrl('/login');
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function() {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    }

    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    getTitle() {
      let titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.split('/').pop();

      const titles = {
          '/main/job-positions': 'Cargos',
          '/main/dashboard': 'Dashboard',
          '/main/user':     'Usuarios',
          '/main/adscription-info': 'Informacion de la Adscripción',
          '/main/job-areas': 'Unidades Responsables',
          '/main/password':  'Asignación de Contraseña',
          '/main/change-pass':  'Cambiar de Contraseña',
          '/main/fiscal-document': 'Documentos Fiscales',
          '/main/fiscal-document-control' : 'Control de Presentacion de Documento Fiscal',
          '/main': 'Bienvenido'
    };

      return titles[this.location.path()];
    }
}
