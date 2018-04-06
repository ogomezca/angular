import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeclarationsComponent } from './view-declarations.component';

describe('ViewDeclarationsComponent', () => {
  let component: ViewDeclarationsComponent;
  let fixture: ComponentFixture<ViewDeclarationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDeclarationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
