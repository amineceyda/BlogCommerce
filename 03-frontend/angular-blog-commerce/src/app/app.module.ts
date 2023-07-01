import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';
import { BlogCategoryNavbarComponent } from './components/blog-pages/blog-category-navbar/blog-category-navbar.component';
import { BlogHomeComponent } from './components/blog-pages/blog-home/blog-home.component';
import { BlogSingleCategoryComponent } from './components/blog-pages/blog-single-category/blog-single-category.component';
import { BlogSinglePostComponent } from './components/blog-pages/blog-single-post/blog-single-post.component';
import { PostCardComponent } from './components/blog-pages/post-card/post-card.component';
import { CartDetailsComponent } from './components/shopping-pages/cart-details/cart-details.component';
import { CartStatusComponent } from './components/shopping-pages/cart-status/cart-status.component';
import { CheckoutComponent } from './components/shopping-pages/checkout/checkout.component';
import { ProductCategoryMenuComponent } from './components/shopping-pages/product-category-menu/product-category-menu.component';
import { ProductDetailsComponent } from './components/shopping-pages/product-details/product-details.component';
import { ProductListComponent } from './components/shopping-pages/product-list/product-list.component';
import { SearchComponent } from './components/shopping-pages/search/search.component';
import { ShoppingHomeComponent } from './components/shopping-pages/shopping-home/shopping-home.component';
import { CommentFormComponent } from './components/comments/comment-form/comment-form.component';
import { CommentListComponent } from './components/comments/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
  
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
   
    TermsAndConditionComponent,
        BlogCategoryNavbarComponent,
        BlogHomeComponent,
        BlogSingleCategoryComponent,
        BlogSinglePostComponent,
        PostCardComponent,
        CartDetailsComponent,
        CartStatusComponent,
        CheckoutComponent,
        ProductCategoryMenuComponent,
        ProductDetailsComponent,
        ProductListComponent,
        SearchComponent,
        ShoppingHomeComponent,
        CommentFormComponent,
        CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
