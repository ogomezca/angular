export class WorkExperience {
  _id: string;
  info: Array<any>;
  createdAt: any;
  modifiedAt: any;
  userId: string;
  modifierId: string;
  decId: string;

  public URLSearchParamsGeneral(){

    const body = new URLSearchParams();

    body.set('info', this.info.toString());
    body.set('userId', this.userId);
    body.set('modifierId', this.modifierId);
    body.set('decId',this.decId);

  }
}
