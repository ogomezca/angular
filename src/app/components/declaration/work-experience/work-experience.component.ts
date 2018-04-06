import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css', '../../../../assets/css/global.css']
})
export class WorkExperienceComponent implements OnInit {
  public checkedBox= false;
  public falseSection= false;

  constructor() { }

  ngOnInit() {
  }

  public checkBox(){
    if(this.checkedBox===true){
      this.falseSection=true;
    }
  }

}
