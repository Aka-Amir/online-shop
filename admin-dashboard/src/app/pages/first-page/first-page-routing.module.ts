import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
import { LogGuard } from 'Core/guards/log.guard';
import { OrderComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { AddComponent } from './components/products/add/pr-add.component';
import { ListComponent } from './components/products/list/pr-list.component';


const childeRoutes: Routes = [
  {
    path: '',
    component: DashBoardComponent
  }, {
    path: 'orders',
    component: OrderComponent
  }, {
    path: 'products',
    component: ListComponent,
    children: [
      { path: 'add', component: AddComponent },
      { path: '', component: ListComponent }
    ]
  }
];

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [LogGuard],
    children: childeRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstPageRoutingModule { }
