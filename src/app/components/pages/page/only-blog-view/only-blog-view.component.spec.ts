import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyBlogViewComponent } from './only-blog-view.component';

describe('OnlyBlogViewComponent', () => {
  let component: OnlyBlogViewComponent;
  let fixture: ComponentFixture<OnlyBlogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyBlogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyBlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
