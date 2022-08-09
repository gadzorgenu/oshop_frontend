import { ShoppingCartService } from './../../services/shopping-cart/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = { "name":"Georgina"}
  shoppingCartItemCount!: number
  order = null

  constructor(private cartService: ShoppingCartService) { 
  }

  ngOnInit() {
  this.cartService.getItems().subscribe(
    res => {
      this.shoppingCartItemCount = 0
      for(let item in res){
        this.shoppingCartItemCount +=res[item].quantity 
      }
    }


  )
  
     
  }

  

}
