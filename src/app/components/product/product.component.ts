import { ShoppingCart } from './../../models/ShoppingCart';
import { ShoppingCartService } from './../../services/shopping-cart/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product/product.service';
import { Product } from '../../models/Product';
import { Component } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [];
  cartItems: ShoppingCart[] = [];
  cartItem!: ShoppingCart ;
  category: any;
  productSize!: number; 
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService ,
    private cartService: ShoppingCartService
  ) { 
    cartService.getItem
    
    this.getProducts();
    this.getItems();
   
    this.route.queryParamMap.subscribe(params => {
      this.category  = params.get('category');

      (this.category) ? this.getProductsByCategory(): this.getProducts();
    })
  }


  getProducts(): void {
    this.productService.getProducts().subscribe(
      (res: Product[]) => {
        this.products = res;
        this.productSize = res.length
      })
  }

  getItems():void {
    this.cartService.getItems().subscribe(
      (res:ShoppingCart[]) => {
        this.cartItems = res
      }
    )
  }

  getProductsByCategory(): void {
    this.productService.getProductsByCategory(this.category).subscribe(
      (cat: Product[]) => {
        this.products = cat
      }
    )
  }
}
