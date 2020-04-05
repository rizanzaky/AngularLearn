import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class CartServiceService {

  // Define methods to add items to the cart, return cart items, and clear the cart items:

  items = [];

  constructor() { }

  addToCart(product: any) : void {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() : void {
    this.items.splice(0, this.items.length);
  }
}
