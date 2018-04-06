import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveVehiclesComponent } from './automotive-vehicles.component';

describe('AutomotiveVehiclesComponent', () => {
  let component: AutomotiveVehiclesComponent;
  let fixture: ComponentFixture<AutomotiveVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomotiveVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomotiveVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
