import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedDeterminationComponent } from './related-determination.component';

describe('RelatedDeterminationComponent', () => {
  let component: RelatedDeterminationComponent;
  let fixture: ComponentFixture<RelatedDeterminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedDeterminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedDeterminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
