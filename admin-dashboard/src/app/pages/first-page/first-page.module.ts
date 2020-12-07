import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageRoutingModule } from './first-page-routing.module';
import { MainComponent } from './components/main/main.component';
import { GuardModule } from 'Core/guard.module';
import { SharedModule } from 'shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrderComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { AddComponent } from './components/products/add/pr-add.component';
import { ListComponent } from './components/products/list/pr-list.component';
import { UsersComponent } from './components/users/users.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
@NgModule({
  declarations: [
    MainComponent,
    OrderComponent,
    ProductsComponent,
    AddComponent,
    ListComponent,
    UsersComponent,
    TicketsComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    FirstPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    GuardModule,
    SharedModule
  ]
})
export class FirstPageModule { }
