import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CartServiceService {

  // Define methods to add items to the cart, return cart items, and clear the cart items:

  items = [];

  constructor(private httpClient: HttpClient) { }

  addToCart(product: any) : void {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() : void {
    this.items.splice(0, this.items.length);
  }

  getShippingRates() {
    return this.httpClient.get('./assets/shipping.json');
  }
}
