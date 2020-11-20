import { Injectable } from '@angular/core';
import { ProductRow } from 'shared/models/product-list-interface';


@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor() { }

    async initialize(): Promise<boolean> {
        return true;
    }

    async getCategory(): Promise<Array<string>> {
        const ReturnValue = [''];
        return ReturnValue;
    }

    async getProducts(): Promise<ProductRow[]> {
        const ReturnValue: ProductRow[] = [
            {
                name: 'پیرهن لویی ویتون',
                price: 800,
                amount: 100,
                category: 'مردانه'
            },
            {
                name: 'شلوار ال سی واکی کی',
                price: 400,
                amount: 300,
                category: 'مردانه'
            },
            {
                name: 'کفش نایک ایر',
                price: 1200,
                amount: 40,
                category: 'تمامی افراد'
            }
        ];
        return await ReturnValue;
    }
}
