import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LogGuard } from './guards/log.guard';
import { LoginService } from './service/login.service';
import { ProductsService } from './service/products.service';
import { OrderService } from './service/orders.service';
import { DashboardService } from './service/Dashboard.service';
import { UsersService } from './service/users.service';
import { StatisticsService } from './service/statistics.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    LogGuard,
    LoginService,
    ProductsService,
    OrderService,
    UsersService,
    DashboardService,
    StatisticsService,
  ],
})
export class GuardModule {}
