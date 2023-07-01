import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoryNavbarComponent } from './blog-category-navbar.component';

describe('BlogCategoryNavbarComponent', () => {
  let component: BlogCategoryNavbarComponent;
  let fixture: ComponentFixture<BlogCategoryNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCategoryNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCategoryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
