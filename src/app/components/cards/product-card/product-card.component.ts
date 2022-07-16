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

  constructor() { }

  addToCart(product: Product){
    let cartId = localStorage.getItem('cartId');

    if(!cartId){
      
    }
  }

}
