import { User } from 'app/models/user.model';
import { Action } from 'app/models/action.model';

export class TableData {
    headerRows: string[];
    dataRows: any[];
    allowedActions: Action[];
}
