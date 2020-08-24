import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products: Array<IProduct>;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.products = this.service.getProducts();
  }

  productWasAdded(product: IProduct) {
    this.service.addToCart(product);
  }
}
