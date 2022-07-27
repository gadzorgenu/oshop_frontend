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

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product): void{
    this.cartService.addToCart(product.id, 'add').subscribe()
  }

  // getQuantity(){
  // if(!this.shoppingCart) return 0;

  //  let item =  this.shoppingCart.id;
  //  return item ? this.shoppingCart.quantity : 0;

  // }

  // getQuantity(){
  //   this.cartService.getItem(this.product.id).subscribe(
  //     (res:ShoppingCart) => {
  //       this.shoppingCart = res;
  //       console.log(this.shoppingCart)
  //     }
  //   )
  // }

}
