export class AdscriptionInfo {
    _id: string;
    address: string;
    intNum: string;
    extNum: string;
    cp: string;
    sector: string;
    state: string;
    city: string;
    phoneNumber: string;

    public static urlSearchParamsDeleteInfo(adscriptionName: any, infoId: any) {
        const body = new URLSearchParams();

        console.log(adscriptionName);
        console.log(infoId);

        body.set('adscriptionName', adscriptionName);
        body.set('infoId', infoId);

        return body;
    }

    public static urlSearchParamsPut(adscriptionName, adscriptionInfo: AdscriptionInfo) {
        const body = new URLSearchParams();

        body.set('adscriptionName', adscriptionName);
        body.set('infoId', adscriptionInfo._id);
        body.set('info[address]', adscriptionInfo.intNum);
        body.set('info[intNum]', adscriptionInfo.intNum);
        body.set('info[extNum]', adscriptionInfo.extNum);
        body.set('info[cp]', adscriptionInfo.cp);
        body.set('info[sector]', adscriptionInfo.sector);
        body.set('info[state]', adscriptionInfo.state);
        body.set('info[city]', adscriptionInfo.city);
        body.set('info[phoneNumber]', adscriptionInfo.phoneNumber);

        return body;
    }

    public urlSearchParams(adscriptionName: any, creatorId: any) {

        const body = new URLSearchParams();

        body.set('adscriptionName', adscriptionName);
        body.set('info[address]', this.address);
        body.set('info[intNum]', this.intNum);
        body.set('info[extNum]', this.extNum);
        body.set('info[cp]', this.cp);
        body.set('info[sector]', this.sector);
        body.set('info[state]', this.state);
        body.set('info[city]', this.city);
        body.set('info[phoneNumber]', this.phoneNumber);

        return body;
    }
}
