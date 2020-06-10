import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: IProduct;
  productAdded: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit() {
  }

  onProductAdded(): void {
    this.productAdded.emit(this.product);
  }

}
