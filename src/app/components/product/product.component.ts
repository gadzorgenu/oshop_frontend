import { ShoppingCart } from './../../models/ShoppingCart';
import { ShoppingCartService } from './../../services/shopping-cart/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product/product.service';
import { Product } from '../../models/Product';
import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [];
  category: any;
  productSize!: number; 
  @Output() productAdded = new EventEmitter()
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService ,
    
  ) { 
    // cartService.getItem
    
    this.getProducts();
    this.route.queryParamMap.subscribe(params => {
      this.category  = params.get('category');

      (this.category) ? this.getProductsByCategory(): this.getProducts();
    })
  }


  //Todo: If product is found in cart, display cart else display product
  //Maybe get all the ids in the cart, if the productID is found in the cart, then display the entire cart else get the product with the id 

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (res: Product[]) => {
        this.products = res;
        this.productSize = res.length
      })
  }

  addProductToCart(product: any){
    this.productAdded.emit(product);
  }

  getProductsByCategory(): void {
    this.productService.getProductsByCategory(this.category).subscribe(
      (cat: Product[]) => {
        this.products = cat
      }
    )
  }
}
