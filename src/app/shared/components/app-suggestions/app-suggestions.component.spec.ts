import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSuggestionsComponent } from './app-suggestions.component';

describe('AppSuggestionsComponent', () => {
  let component: AppSuggestionsComponent;
  let fixture: ComponentFixture<AppSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
