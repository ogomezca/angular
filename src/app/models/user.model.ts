import { Employment } from './employment.model';

export class User {

    _id: string;

    // General info
    username: string;
    password: string;
    status: string;
    userType: string;
    email: string;
    isActive: string;
    name: string;
    lastName: string;
    secondLastName: string;
    telephone: string;
    birthDate: string;
    rfc: string;
    pswState: string;
    gender: string;
    creatotId: string;
    employment: Employment = new Employment();
    birthCountry: string;
    birthState: string;
    birthCity: string;
    nacionality: string;
    civilStatus: string;
    address: string;
    extNum: string;
    intNum: string;
    cp: string;
    suburb: string;
    state: string;
    city: string;
    userId: string;
    modifierId: string;

    //unsubscribe properties
    action: string;
    fileName: any;
    justify: string;
    date: any;
    adscriptionName: string;
    type: string;
    dateUnsubscribe: any;

    public urlSearchParamsGeneral() {

        const body = new URLSearchParams();

        body.set('username', this.username);
        body.set('userType', this.userType);
        body.set('email', this.email);
        body.set('name', this.name);
        body.set('lastName', this.lastName);
        body.set('secondLastName', this.secondLastName);
        body.set('telephone', this.telephone);
        body.set('birthDate', this.birthDate);
        body.set('rfc', this.rfc);
        body.set('gender', this.gender);
        body.set('emp[role]', this.employment[0]);
        body.set('emp[adscription]', this.employment.adscription.toString());
        body.set('emp[contractType]', this.employment.contractType.toString());
        body.set('emp[posessionDate]', this.employment.posessionDate.toString());
        body.set('emp[nominaKey]', this.employment.nominaKey.toString());
        body.set('emp[office]', this.employment.office.toString());
        body.set('emp[position]', this.employment.position.toString());
        body.set('emp[ext]', this.employment.ext.toString());
        body.set('emp[status]', this.employment.status.toString());
        body.set('emp[permitIniDate]', this.employment.permitIniDate.toString());
        body.set('emp[permitEndDate]', this.employment.permitEndDate.toString());
        body.set('emp[banDate]', this.employment.banDate.toString());
        body.set('emp[modifierId]', this.creatotId);
        body.set('emp[creatorId]', this.creatotId);
        body.set('birthCountry', this.birthCountry);
        body.set('birthState', this.birthState);
        body.set('birthCity', this.birthCity);
        body.set('nacionality', this.nacionality);
        body.set('civilStatus', this.civilStatus);
        body.set('address', this.address);
        body.set('extNum', this.extNum);
        body.set('intNum', this.intNum);
        body.set('cp', this.cp);
        body.set('suburb', this.suburb);
        body.set('state', this.state);
        body.set('city', this.city);
        body.set('creatotId', this.creatotId);
        body.set('unsubscribe[type]', this.action);
        body.set('unsubscribe[dateUnsuscribe]', this.date);
        body.set('unsubscribe[filename]', this.fileName);
        body.set('unsubscribe[justify]', this.justify);
        body.set('unsubscribe[adscriptionName]', this.adscriptionName);

        return body;
    }

    public urlSearchParamsPut(user: User, modifierId) {
        const body = new URLSearchParams();

        body.set('username', this.username);
        body.set('userType', this.userType);
        body.set('email', this.email);
        body.set('name', this.name);
        body.set('lastName', this.lastName);
        body.set('secondLastName', this.secondLastName);
        body.set('telephone', this.telephone);
        body.set('birthDate', this.birthDate);
        body.set('rfc', this.rfc);
        body.set('gender', this.gender);
        body.set('birthCountry', this.birthCountry);
        body.set('birthState', this.birthState);
        body.set('birthCity', this.birthCity);
        body.set('nacionality', this.nacionality);
        body.set('civilStatus', this.civilStatus);
        body.set('address', this.address);
        body.set('extNum', this.extNum);
        body.set('intNum', this.intNum);
        body.set('cp', this.cp);
        body.set('suburb', this.suburb);
        body.set('state', this.state);
        body.set('city', this.city);
        body.set('modifierId', modifierId);

        return body;
    }

    public urlSearchParamsChangePsw() {
        const body = new URLSearchParams();

        body.set('password', this.password);

        return body;
    }

    public urlSearchParamsUnsubscribeUser() {

        const body = new URLSearchParams();

        body.set('username', this.username);
        body.set('action', this.action);
        body.set('adscriptionName', this.adscriptionName);
        body.set('unsus[type]', this.type);
        body.set('unsus[filename]', this.fileName);
        body.set('unsus[justify]', this.justify);
        body.set('unsus[adscriptionName]', this.adscriptionName);
        body.set('unsus[dateUnsubscribe]', this.dateUnsubscribe);

        return body;
    }

}
