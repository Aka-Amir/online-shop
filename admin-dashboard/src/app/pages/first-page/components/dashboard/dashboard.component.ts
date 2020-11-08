import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'shared/models/user-info.interface';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit {

    user: UserInfo;

    constructor() {
        this.user = JSON.parse(localStorage.getItem('userInfo'));
    }

    ngOnInit(): void { }
}
