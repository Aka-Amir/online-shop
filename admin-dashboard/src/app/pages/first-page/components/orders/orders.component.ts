import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'Core/service/products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  DropDown = new FormControl('today');

  constructor(private PS: ProductsService) {
    // get products from Service
  }

  ngOnInit(): void { }

  LogVal(): void {
    console.log(this.DropDown.value);
  }
}
