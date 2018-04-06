import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicDependentDataComponent } from './economic-dependent-data.component';

describe('EconomicDependentDataComponent', () => {
  let component: EconomicDependentDataComponent;
  let fixture: ComponentFixture<EconomicDependentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicDependentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicDependentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
