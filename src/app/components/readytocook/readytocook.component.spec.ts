import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadytocookComponent } from './readytocook.component';

describe('ReadytocookComponent', () => {
  let component: ReadytocookComponent;
  let fixture: ComponentFixture<ReadytocookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadytocookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadytocookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
