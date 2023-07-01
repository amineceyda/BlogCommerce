import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BlogHomeComponent } from './components/blog-pages/blog-home/blog-home.component';
import { BlogSingleCategoryComponent } from './components/blog-pages/blog-single-category/blog-single-category.component';
import { BlogSinglePostComponent } from './components/blog-pages/blog-single-post/blog-single-post.component';
import { ShoppingHomeComponent } from './components/shopping-pages/shopping-home/shopping-home.component';
import { ProductListComponent } from './components/shopping-pages/product-list/product-list.component';
import { ProductDetailsComponent } from './components/shopping-pages/product-details/product-details.component';
import { CheckoutComponent } from './components/shopping-pages/checkout/checkout.component';
import { CartDetailsComponent } from './components/shopping-pages/cart-details/cart-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'blog', component:BlogHomeComponent},
  {path:'blog-category', component:BlogSingleCategoryComponent},
  {path:'post', component:BlogSinglePostComponent},

  {path:'ecommerce', component:ShoppingHomeComponent},
  {path:'products', component:ProductListComponent},
  {path:'product', component:ProductDetailsComponent},
  {path:'shopping-category', component:ProductListComponent},

  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},

  {path:'about', component:AboutUsComponent},
  {path:'term-conditions', component:TermsAndConditionComponent},
  {path:'contact', component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
