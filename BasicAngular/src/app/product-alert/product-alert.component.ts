import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product;

  @Output() notify = new EventEmitter();
}
