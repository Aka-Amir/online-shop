import { async } from '@angular/core/testing';
import { Component, OnInit , AfterViewInit} from '@angular/core';
import { ProductsService } from 'Core/service/products.service';
import { ProductRow } from 'shared/models/product-list-interface';

let Model=[];

@Component({
    selector: 'app-pr-list',
    templateUrl: './pr-list.component.html',
    styleUrls: ['./pr-list.component.scss']
})
export class ListComponent implements OnInit , AfterViewInit {
    productsList: ProductRow[];

    constructor(private productService: ProductsService) {}

    async ngOnInit(): Promise<void> {
        this.productService.getProducts().then((e) => {
            this.productsList = e;
            console.log(this.productsList);
        });
    }
    ngAfterViewInit(): void {

        // function PrintM() {
        //     return new Promise((resolve,reject)=>{
        //         this.productService.getProducts().then((ret)=>{
        //             if(err)reject(err);
        //             reject(ret)
        //         });
        //     })
        // }
        // console.log(PrintM());
        // setTimeout(() => {
        //     console.log(this.productsList);
        // }, 100);
    }
}
