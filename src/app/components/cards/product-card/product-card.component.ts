import { Router } from '@angular/router';
import { ShoppingCart } from './../../../models/ShoppingCart';
import { ShoppingCartService } from './../../../services/shopping-cart/shopping-cart.service';
import { Product } from './../../../models/Product';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product!: Product;
  @Input('cartItem') cartItem!: ShoppingCart;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart!: ShoppingCart;
  @Output() productAdded = new EventEmitter();

  @ViewChild('element') element!: ToastComponent;


  constructor(
    private cartService: ShoppingCartService,
    private router: Router
    ) {
   }

   addToCart(productId: string): void{
    this.cartService.addToCart(productId, 'add').subscribe(
      (res: ShoppingCart) => {
        localStorage.setItem("cartId", res.id)
        this.onCreate();
        this.cartService.getItem(res.id).subscribe(
          (result: ShoppingCart) =>  this.cartItem = result
        )
      }
    );
  }

  onCreate() {
    this.element.show();
  }

  reduceQuantity(productId: string): void{
    this.cartService.addToCart(productId, 'remove').subscribe(
      (res: ShoppingCart) => {
        this.cartService.getItem(res.id).subscribe(
          (result: ShoppingCart) =>  this.cartItem = result
        )
      }
    );
  }

  deleteProductFromCart(cartId: string){
    if (!confirm('Are you sure you want to delete this product from cart?')) return; 
    this.cartService.deleteProductFromCart(cartId).subscribe()
    window. location. reload()
  }

  getQuantity(){
  if(!this.cartItem) return 0;
   let item =  this.cartItem.id;
   return item ? this.cartItem.quantity : 0;
  }

}
