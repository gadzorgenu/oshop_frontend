import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingCart } from './../../models/ShoppingCart';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private base_url = `${environment.apiUrl}/cart`;

  constructor(private http:HttpClient) { }

  createcart(cart: ShoppingCart): Observable<ShoppingCart> {
    return this.http.post<ShoppingCart>(`${this.base_url}/add`, cart)
  }
}
