import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-shipping-rates',
  templateUrl: './shipping-rates.component.html',
  styleUrls: ['./shipping-rates.component.css']
})
export class ShippingRatesComponent implements OnInit {

  shippingRates: any;

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.shippingRates = this.cartService.getShippingRates();
  }
}
