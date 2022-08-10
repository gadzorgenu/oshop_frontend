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
  category: any;
  totalQuantity = 0


  constructor(private cartService: ShoppingCartService) {
    this.totalQuantity;
    this.getCartDetail();

   }

 
  ngOnInit(): void {
    // this.getItems()
  }

  // getItems():void {
  //   this.cartService.getItems().subscribe(
  //     (res:ShoppingCart[]) => {
  //       this.cartItems = res
  //     }
  //   )
  // }

  

  getCartDetail(){
    this.cartService.getCart().subscribe(
      (res => {
        this.totalQuantity = res.totalQuantity
        this.cartItems = res.items

      })
    )
  }

  get productIds(){
   return Object.keys(this.cartItems)
}

  


}
