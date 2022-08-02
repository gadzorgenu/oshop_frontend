import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingCart } from './../../models/ShoppingCart';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private base_url = `${environment.apiUrl}/cart`;

  constructor(private http: HttpClient) { }

  // private createcart(): Observable<ShoppingCart> {
  //   console.log(new Date().getDate)
  //   return this.http.post<ShoppingCart>(`${this.base_url}/add`, { createdAt: new Date().getDate })
  // }

  // private getCart(cartId: string | null) {
  //   return this.http.get<ShoppingCart>(`${this.base_url}/${cartId}`)
  // }
  // private getOrCreateCartId() {
  //   let cartId = localStorage.getItem('cartId');
  //   if (cartId) return cartId;

  //   this.createcart().subscribe(res => {
  //     localStorage.setItem('cartId', res.id);
  //     cartId = res.id
  //   })
  //   return cartId;
  // }

  // async addToCart(product: Product) {
  //   let cartId =  this.getOrCreateCartId();

  //   console.log(cartId);

  //   let item$ = this.getProductInCart(cartId, product.id).subscribe(res => {

  //   })

  // }

  // private getProductInCart(cartId: string | null, productId: string) {
  //   return this.http.get<ShoppingCart>(`${this.base_url}/${cartId}/items/${productId}`)
  // }

  addToCart(productId: string, operation: string): Observable<ShoppingCart>{
    return this.http.post<ShoppingCart>(`${this.base_url}/${productId}/${operation}`, null);
  }

  getItem(cartId: string): Observable<ShoppingCart>{
    return this.http.get<ShoppingCart>(`${this.base_url}/${cartId}`)
  }

  getItems(): Observable<ShoppingCart[]> {
    return this.http.get<ShoppingCart[]>(`${this.base_url}/`)
  }

  
}
