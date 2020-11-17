import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor() { }

    async initialize(): Promise<boolean> {
        return true;
    }

    async getCategory(): Promise<Array<string>> {
        const ret = [''];
        return ret;
    }
}
