import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'shared/models/user-info.interface';

@Component({
    selector: 'app-right-nav',
    templateUrl: './right-nav.component.html',
    styleUrls: ['./right-nav.component.scss', './right-nav-dark.component.scss']
})
export class RightNavComponent implements OnInit {
    public CurrentUser: UserInfo;
    public roles = {
        admin: 'مدیر'
    };

    constructor() {
        this.CurrentUser = JSON.parse(localStorage.getItem('userInfo'));
    }

    ngOnInit(): void { }
}
