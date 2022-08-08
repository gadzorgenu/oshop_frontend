import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: ShoppingCart[] = [];

  constructor(private cartService: ShoppingCartService) {
    this.getItems()
   }

  getItems():void {
    this.cartService.getItems().subscribe(
      (res:ShoppingCart[]) => {
        this.cartItems = res
      }
    )
  }

  ngOnInit(): void {
  }

}
