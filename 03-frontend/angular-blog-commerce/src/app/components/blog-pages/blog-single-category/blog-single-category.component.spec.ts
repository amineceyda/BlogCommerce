import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleCategoryComponent } from './blog-single-category.component';

describe('BlogSingleCategoryComponent', () => {
  let component: BlogSingleCategoryComponent;
  let fixture: ComponentFixture<BlogSingleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSingleCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSingleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
