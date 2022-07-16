import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = { "name":"Georgina"}
  order = null

  constructor() { }

  ngOnInit(): void {
  }

  

}
