import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestConflictComponent } from './interest-conflict.component';

describe('InterestConflictComponent', () => {
  let component: InterestConflictComponent;
  let fixture: ComponentFixture<InterestConflictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestConflictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
