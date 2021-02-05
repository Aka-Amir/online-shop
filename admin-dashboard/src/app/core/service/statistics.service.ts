import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminRoutes } from '../Api/ApiRoutes';
import { IncomeStatistics } from '../../shared/models/income-statistics';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getIncomeStatistics(
    token: string
  ): IncomeStatistics  {
    const response = this.http.post<IncomeStatistics>(
      AdminRoutes.INCOME_STATISTICS,
      {
        token: token,
      }
    );

    return {
      labels: ['مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
      data: [100000, 200000, 200000, 500000, 450000, 380000],
    };

    
  }
}
