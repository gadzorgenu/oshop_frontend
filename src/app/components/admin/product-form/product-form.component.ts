import { ShoppingCartService } from './../../../services/shopping-cart/shopping-cart.service';
import { Product } from './../../../models/Product';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories: any;
  product: any = {};
  cartReq!: string; 
  id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getProduct(this.id);
    }
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.productService.getCategories().subscribe(
      result => this.categories = result
    )
  }

  getProduct(id: string): void {
    this.productService.getProduct(id).subscribe(
      result => {
        this.product = result
      }
    )
  }

  addProduct(product: Product): void {
    if (this.id) {
      this.productService.updateProduct(this.id, product).subscribe();
    }
    else {
      this.productService.addProduct(product).subscribe();
    }
    this.router.navigate(['/admin/products'])
  }

  deleteProduct(): void {
    if (!confirm('Are you sure you want to delete this product?')) return; 
    
      this.productService.deleteProduct(this.id).subscribe()
      this.router.navigate(['/admin/products'])
  }

}
