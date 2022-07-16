import { ProductService } from './../../../services/product/product.service';
import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent  {
  categories: any;
  @Input('category') category: any;

  constructor(private productService: ProductService) { 
    this.getCategories();
  }

  getCategories(): void {
    this.productService.getCategories().subscribe(
      (cat: Product[]) => {
        this.categories = cat;
      }
    )
  }


}
