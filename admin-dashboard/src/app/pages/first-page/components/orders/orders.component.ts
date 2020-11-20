import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderService } from 'Core/service/orders.service';
import { OrdersList } from 'shared/models/orders.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  DropDown = new FormControl('today');
  orderList: OrdersList[];

  constructor(private OS: OrderService) {
    OS.getOrders().then((e) => {
      this.orderList = e;
      console.log(e);

    });
  }

  ngOnInit(): void { }

  LogVal(): void {
    console.log(this.DropDown.value);
  }
}
