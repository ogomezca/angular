import { Screen } from '../../app/models/screen.model';

export class Role {

  roleId: any;
  roleName: string;
  screens: Array<Screen>;

  public static getActionsFromJson(modules: any, moduleName: string) {

    for (let i = 0; i < modules.result[0].screens.length; i++) {

      if (moduleName === modules.result[0].screens[i].moduleName) {

        console.log(modules.result[0].screens[i]);
        console.log(modules.result[0].screens[i].actions);

        return modules.result[0].screens[i].actions;
      }
    }

    return [];
  }

  public static searchForActionInJson(modules: any, moduleName: string, action: string) {

    for (let i = 0; i < modules.result[0].screens.length; i++) {

      if (moduleName === modules.result[0].screens[i].moduleName) {

        console.log(modules.result[0].screens[i]);
        console.log(modules.result[0].screens[i].actions);

        for (let j = 0; j < modules.result[0].screens[i].actions.length; j++) {
          if (modules.result[0].screens[i].actions[j].actionType === action) {
            return true;
          }
        }
      }
    }

    return false;
  }

  public urlSearchParamsChnageActiveScreen() {
    const body = new URLSearchParams();

    const screen = this.screens[0];

    body.set('roleName', this.roleName);
    body.set('_id', screen.screenId);
    body.set('active', screen.active);

    return body;
  }
}
