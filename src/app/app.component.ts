import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Array<IProduct>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  productWasAdded(product: IProduct) {
    this.productService.addToCart(product);
  }
}
