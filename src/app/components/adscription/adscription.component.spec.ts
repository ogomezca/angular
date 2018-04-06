import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdscriptionComponent } from './adscription.component';

describe('AdscriptionComponent', () => {
  let component: AdscriptionComponent;
  let fixture: ComponentFixture<AdscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
