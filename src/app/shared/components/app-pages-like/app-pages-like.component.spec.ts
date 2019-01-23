import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPagesLikeComponent } from './app-pages-like.component';

describe('AppPagesLikeComponent', () => {
  let component: AppPagesLikeComponent;
  let fixture: ComponentFixture<AppPagesLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPagesLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPagesLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
