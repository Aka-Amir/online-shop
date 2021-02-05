import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'shared/models/user-info.interface';
import { DashboardService } from '../../../../core/service/Dashboard.service';
interface DashboardStatics {
  toDay: number;
  tomorrow: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashBoardComponent implements OnInit {
  user: UserInfo;
  income: DashboardStatics;
  ordersCount: DashboardStatics;
  ticketsCount: DashboardStatics;
  views: DashboardStatics;

  constructor(private DS: DashboardService) {
    this.user = JSON.parse(localStorage.getItem('userInfo'));
    this.income = this.DS.getIncome('');
    this.ordersCount = this.DS.getOrderCount('');
    this.ticketsCount = this.DS.getTicketsCount('');
    this.views = this.DS.getViews('');
  }

  ngOnInit(): void {}
}
