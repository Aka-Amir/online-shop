import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdersList } from 'shared/models/orders.interface';

@Injectable()
export class OrderService {
    constructor(private http: HttpClient) {

    }

    async getOrders(): Promise<OrdersList[]> {
        const returnValue: OrdersList[] = [
            {
                user_name: 'امیر خلیلی',
                user_address: 'فلکه فلان ، بلوار لورم ایپسوم ، کوچه شش',
                user_mail: 'amirkhalili047@outlook.com',
                user_phone: '09353756115',
                deliveryReport: 'waiting',
                user_orders: [
                    {
                        order_productName: 'پیرهن لویی ویتون',
                        order_productCode: '#442213',
                        order_amount: 2,
                        order_productPrice: 400
                    } , {
                        order_productName: 'نایک ایر',
                        order_productCode: '#442256',
                        order_amount: 1,
                        order_productPrice: 1200
                    }
                ]}
        ];

        return await returnValue;
    }
}
