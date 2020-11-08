import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pr-list',
    templateUrl: './pr-list.component.html',
    styleUrls: ['./pr-list.component.scss']
})
export class ListComponent implements OnInit {
    constructor() {
        console.log('list');
    }

    ngOnInit(): void { }
}
