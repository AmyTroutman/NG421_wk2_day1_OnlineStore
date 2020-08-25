import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';
import products from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  shoppingCart: Array<IProduct> = [];
  products: Array<IProduct>;
  constructor() {
    this.products = products;
  }

  getProducts(): Array<IProduct> {
    return this.products;
  }

  getShoppingCart(): Array<IProduct> {
    return this.shoppingCart;
  }

  addToCart(product: IProduct) {
    this.shoppingCart.push(product);
  }

  getProduct(id: number) {
    return this.products.filter(item => item.id === id);
  }

  getCategory(cat: number) {
    return this.products.filter(item => item.category === cat);
  }
}
