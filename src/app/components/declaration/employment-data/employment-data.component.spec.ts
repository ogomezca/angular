import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentDataComponent } from './employment-data.component';

describe('EmploymentDataComponent', () => {
  let component: EmploymentDataComponent;
  let fixture: ComponentFixture<EmploymentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
