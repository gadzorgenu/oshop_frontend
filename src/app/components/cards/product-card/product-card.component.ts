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

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product){
    // let cart = 
    
  }

}
