import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlogPostComponent } from './app-blog-post.component';

describe('AppBlogPostComponent', () => {
  let component: AppBlogPostComponent;
  let fixture: ComponentFixture<AppBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBlogPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
