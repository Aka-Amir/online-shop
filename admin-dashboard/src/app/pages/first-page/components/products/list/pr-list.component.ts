import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'Core/service/products.service';
import { ProductRow } from 'shared/models/product-list-interface';

@Component({
    selector: 'app-pr-list',
    templateUrl: './pr-list.component.html',
    styleUrls: ['./pr-list.component.scss']
})
export class ListComponent implements OnInit {
    productsList: ProductRow[];

    constructor(private productService: ProductsService) {
        this.productService.getProducts().then((e) => this.productsList = e);
    }

    ngOnInit(): void { }
}
