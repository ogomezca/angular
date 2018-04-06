import { Action } from '../../app/models/action.model';

export class Screen {

    screenId: any;
    url: string;
    moduleName: string;
    actions: Array<Action>;
    active: any;

    public urlSearchParamsChangeActive() {
        const body = new URLSearchParams();

        const action = this.actions[0];
        body.set('screenId', this.screenId);
        body.set('actionType', action.actionType);
        body.set('active', action.active.toString());

        return body;
    }
}
