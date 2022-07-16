import { Product } from './../../../models/Product';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort,Sort } from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';


@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  // products: Product[] = []
  filteredProducts: any[] = []

  dataSource!: MatTableDataSource<Product>
  displayedColumns: string[] = ['name', 'price', 'category','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService,
    private _liveAnnouncer: LiveAnnouncer
    ) {
      this.getProducts();
  }

  ngOnInit(): void {
   
  }

  // ngAfterViewInit() {

  // }

  // filter(query: string){
  //   this.filteredProducts = (query) ? 
  //   this.products.filter( p => p.name.toLowerCase().includes(query.toLowerCase())) :
  //   this.products;


  // }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (result: any) => {
        // this.products = result;
        this.dataSource = new MatTableDataSource<Product>(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

