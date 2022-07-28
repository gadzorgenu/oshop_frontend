import { ShoppingCart } from './../../../models/ShoppingCart';
import { ShoppingCartService } from './../../../services/shopping-cart/shopping-cart.service';
import { Product } from './../../../models/Product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product!: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart!: ShoppingCart;
  @Input('quantity') quantity!: number;
  cart: any = {};

  constructor(private cartService: ShoppingCartService) {
   }

   addToCart(productId: string): void{
    this.cartService.addToCart(productId, 'add').subscribe(
      (res: ShoppingCart) => {
        localStorage.setItem("cartId", res.id)
        this.cartService.getItem(res.id).subscribe(
          (result: ShoppingCart) =>  this.cart = result
        )
      }
    );
  }

  // getCartId(){
  //   let cartId = localStorage.getItem('cartId');
  //   console.log(cartId)
  //   // if(cartId) return cartId;
  // }

  reduceQuantity(productId: string): void{
    this.cartService.addToCart(productId, 'remove').subscribe(
      (res: ShoppingCart) => {
        this.cartService.getItem(res.id).subscribe(
          (result: ShoppingCart) =>  this.cart = result
        )
      }
    );
  }


  getQuantity(){
    // console.log(this.cart)

  if(!this.cart) return 0;
   let item =  this.cart.id;
   return item ? this.cart.quantity : 0;

  }

  // getQuantity(){
  //   this.cartService.getItem(this.product.id).subscribe(
  //     (res:ShoppingCart) => {
  //       this.shoppingCart = res;
  //       console.log(this.shoppingCart)
  //     }
  //   )
  // }

  // getQuantity(){
  //   if(!this.shoppingCart) return 0;
  //   this.cartService.getItem(this.shoppingCart.id).subscribe(
  //     (res: ShoppingCart) => {
  //       console.log(res)
  //       this.quantity = res.quantity;
  //     }
  //   )
  // }

}
