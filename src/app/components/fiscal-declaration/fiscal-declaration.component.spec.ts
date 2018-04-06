import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalDeclarationComponent } from './fiscal-declaration.component';

describe('FiscalDeclarationComponent', () => {
  let component: FiscalDeclarationComponent;
  let fixture: ComponentFixture<FiscalDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiscalDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
