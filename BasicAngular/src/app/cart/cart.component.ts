import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(private cartService: CartServiceService,
    private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
        name: '', address: ''
      });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(value): void {
    

    this.cartService.clearCart();
    this.checkoutForm.reset();

    window.alert("Successfully checked out with " + value.name + " & " + value.address + "!")
  }

}
