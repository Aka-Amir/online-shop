import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminRoutes } from '../Api/ApiRoutes';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  getViews(token: string) {
    const response = this.http.post(AdminRoutes.VIEWS, {
      token: token
    });
    // return response;
    return {
      toDay: 120,
      tomorrow: 40
    }
  }
  getOrderCount(token: string) {
    const response = this.http.post(AdminRoutes.ORDERS_COUNT, {
      token: token
    });
    // return response;
    return {
      toDay: 10,
      tomorrow: 5
    }
  }
  getIncome(token: string) {
    const response = this.http.post(AdminRoutes.INCOME, {
      token: token
    });
    // return response;
    return {
      toDay: 100000,
      tomorrow: 70000
    }
  }
  getTicketsCount(token: string) {
    const response = this.http.post(AdminRoutes.TICKET_COUNT, {
      token: token
    });
    // return response;
    return {
      toDay: 10,
      tomorrow: 50
    }
  }
}
