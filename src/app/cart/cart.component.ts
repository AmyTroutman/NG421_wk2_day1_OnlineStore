import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: IProduct[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.cart = this.productService.getShoppingCart();
  }

  remove(item: any) {
    const index = this.cart.findIndex(cartItem => cartItem === item);
    this.cart.splice(index, 1);
  }
}
