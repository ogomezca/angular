import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../services/roles/roles.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export let ROUTES: RouteInfo[] = [];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  private currentUserInfo: any;

  constructor(private rolesService: RolesService) { }

  ngOnInit() {

    this.currentUserInfo = JSON.parse(localStorage.getItem('token'));
    const adscription = localStorage.getItem('adscription');
    const currentRole = localStorage.getItem('role');

    const screens = [
      {url: '1', moduleName: 'Inicio'},
      {url: '2', moduleName: 'Declaracion Patrimonial'},
      {url: '3', moduleName: 'Declaracion Fiscal'},
      {url: '4', moduleName: 'Consultar Declaraciones'},
      {url: 'general-data', moduleName: 'Datos Generales'},
      {url: 'work-experience', moduleName: 'Experiencia Laboral'},
      {url: 'cv-data', moduleName: 'Datos Curriculares'},
      {url: 'related-determination', moduleName: 'Determinación relacionada'},
      {url: 'economic-dependent-data', moduleName: 'Dependientes económicos'},
      {url: 'employment-data', moduleName: 'Datos del empleo'},
      {url: 'annual-income', moduleName: 'Remuneración mensual'}

    ];

    this.addAvailableScreens(screens);
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  private addAvailableScreens(screens: any) {

      ROUTES = [];

    for (let i = 0; i < screens.length; i++) {

      ROUTES.push({ path: screens[i].url, title: screens[i].moduleName,  icon: '', class: '' });
    }

    ROUTES.sort((item1, item2) => {
      if (item1.title > item2.title) {
        return 1;
      }

      if (item1.title < item2.title) {
        return -1;
      }

      return 0;
    });
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }
}
