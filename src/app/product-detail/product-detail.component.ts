import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: IProduct;
  // @Output() productAdded: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  shoppingCart: IProduct [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.shoppingCart = this.productService.shoppingCart;
  }

  onProductAdded(): void {
    // this.productAdded.emit(this.product);
    this.shoppingCart.push(this.product);
  }

}
