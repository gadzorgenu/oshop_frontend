import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base_url = `${environment.apiUrl}/product`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.base_url}`);
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.base_url}/categories`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.base_url}/category?category=${category}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.base_url}/add`,product);
  }

  updateProduct(id:String, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.base_url}/update/${id}`,product);
  }

  getProduct(id: String): Observable<Product> {
    return this.http.get<Product>(`${this.base_url}/${id}`);
  }

  deleteProduct(id: String): Observable<Product> {
    return this.http.delete<Product>(`${this.base_url}/${id}`);
  }


}
