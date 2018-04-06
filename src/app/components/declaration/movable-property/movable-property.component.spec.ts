import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovablePropertyComponent } from './movable-property.component';

describe('MovablePropertyComponent', () => {
  let component: MovablePropertyComponent;
  let fixture: ComponentFixture<MovablePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovablePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovablePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
