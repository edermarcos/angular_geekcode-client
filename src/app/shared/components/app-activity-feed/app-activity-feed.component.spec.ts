import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActivityFeedComponent } from './app-activity-feed.component';

describe('AppActivityFeedComponent', () => {
  let component: AppActivityFeedComponent;
  let fixture: ComponentFixture<AppActivityFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppActivityFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppActivityFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
