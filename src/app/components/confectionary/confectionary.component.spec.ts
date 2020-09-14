import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfectionaryComponent } from './confectionary.component';

describe('ConfectionaryComponent', () => {
  let component: ConfectionaryComponent;
  let fixture: ComponentFixture<ConfectionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfectionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfectionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
