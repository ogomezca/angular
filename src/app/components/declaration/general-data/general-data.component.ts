import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.css', '../../../../assets/css/global.css']
})
export class GeneralDataComponent implements OnInit {

  public checkStatusFlag= true;
  public maritalStatus: string = '0';

  constructor() {

  }

  ngOnInit() {
  }

  public seeSelection(){
    if(this.maritalStatus==='2'){
      this.checkStatusFlag= false;
    }
    else{
      this.checkStatusFlag=true;
    }
  }

}
