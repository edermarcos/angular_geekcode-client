import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTodayComponent } from './app-today.component';

describe('AppTodayComponent', () => {
  let component: AppTodayComponent;
  let fixture: ComponentFixture<AppTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
