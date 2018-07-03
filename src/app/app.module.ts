import { ElectronicsComponent } from './electronics/electronics.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { BabyComponent } from './baby/baby.component';
import { BreadComponent } from './bread/bread.component';
import { DairyComponent } from './dairy/dairy.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { FruitsComponent } from './fruits/fruits.component';
import { HomeNeedsComponent } from './home-needs/home-needs.component';
import { OrderService } from './services/order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EmailService } from './services/email.service';
import { HttpModule } from '@angular/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { FeedbackService } from './services/feedback.service';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    RegisterComponent,
    BabyComponent,
    ProductCardComponent,
    BreadComponent,
    DairyComponent,
    VegetablesComponent,
    ElectronicsComponent,
    HomeNeedsComponent,
    CategoriesComponent,
    FruitsComponent,
    ShoppingCartSummaryComponent,
    FeedbackComponent,
    NotFoundComponent,
    ProductQuantityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { 
        path:'',
        component:HomeComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'categories',
        component:CategoriesComponent
      },
      { 
        path:'baby', 
        component: BabyComponent
      },     
      { 
        path:'bread', 
        component: BreadComponent
      },   
      { 
         path:'vegetables', 
         component: VegetablesComponent
       },
       {
        path:'fruits',
        component:FruitsComponent
      },
       { 
         path:'electronics', 
         component: ElectronicsComponent
       },
       { 
         path:'dairy', 
         component: DairyComponent
       },
       { 
         path:'homeneeds', 
         component: HomeNeedsComponent
       },      
       {
        path:'products',
        component:ProductComponent
      },
      {
        path:'shopping-cart',
        component:ShoppingCartComponent
      },
      {
        path:'checkout',
        component:CheckOutComponent,
        canActivate:[AuthGuardService]
      },
      {
        path:'feedback',
        component:FeedbackComponent
      },
      {
        path:'order-success/:id',
        component:OrderSuccessComponent,
        canActivate:[AuthGuardService]
      },
      {
        path:'my-orders',
        component:MyOrdersComponent,
        canActivate:[AuthGuardService]
      },
      {
        path:'admin/orders',
        component:AdminOrdersComponent,
        canActivate:[AuthGuardService]
      },
      {
        path:'admin/products',
        component:AdminProductsComponent,
        canActivate:[AuthGuardService]
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [AuthService,
              UserService,
              AuthGuardService,
              CategoriesService,
              EmailService,
              OrderService,
              FeedbackService,
              ShoppingCartService,
              ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
