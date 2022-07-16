import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSucessComponent } from './components/order-sucess/order-sucess.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';

const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductComponent},
  {path: 'check-out', component: CheckoutComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'order-success', component: OrderSucessComponent},
  {path: 'my/orders', component: MyOrdersComponent},

  //admin routes
  {path: 'admin/orders', component: AdminOrdersComponent,
    // canActivate: [AuthGuard, AdminAuthGuard]
  },
  {path: 'admin/products/new', component: ProductFormComponent},
  {path: 'admin/products/:id', component: ProductFormComponent},
  {path: 'admin/products', component: AdminProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
