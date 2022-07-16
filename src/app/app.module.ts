import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CustomFormsModule } from 'ng2-validation';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { A11yModule } from '@angular/cdk/a11y'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInputComponent } from './components/forms/form-input/form-input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSucessComponent } from './components/order-sucess/order-sucess.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductFilterComponent } from './components/product/product-filter/product-filter.component';
import { ProductCardComponent } from './components/cards/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    NavbarComponent,
    CheckoutComponent,
    ProductComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderSucessComponent,
    ShoppingCartComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    HomeComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,

    //Material
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatInputModule,

    A11yModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
