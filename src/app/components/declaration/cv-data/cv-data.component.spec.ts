import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDataComponent } from './cv-data.component';

describe('CvDataComponent', () => {
  let component: CvDataComponent;
  let fixture: ComponentFixture<CvDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
