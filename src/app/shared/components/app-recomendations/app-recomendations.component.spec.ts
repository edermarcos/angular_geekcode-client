import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecomendationsComponent } from './app-recomendations.component';

describe('AppRecomendationsComponent', () => {
  let component: AppRecomendationsComponent;
  let fixture: ComponentFixture<AppRecomendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRecomendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRecomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
