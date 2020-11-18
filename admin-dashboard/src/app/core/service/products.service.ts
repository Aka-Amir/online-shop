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

    // loadProduct(): ProductRow[] {
    //     return this.getProducts().then((e) => {return e});
    // }
    async getProducts(): Promise<ProductRow[]> {
        const ReturnValue: ProductRow[] = [
            {
                name: 'پیرهن لویی ویتون' ,
                price: 800,
                amount: 100
            } ,
            {
                name: 'شلوار ال سی واکی کی' ,
                price: 400,
                amount: 300
            } ,
            {
                name: 'کفش نایک ایر' ,
                price: 1200,
                amount: 40
            }
        ];
        return await ReturnValue;
    }
}
