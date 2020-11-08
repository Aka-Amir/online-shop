import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'shared/models/user-info.interface';

@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.scss', './top-nav-dark.component.scss']
})
export class TopNavComponent implements OnInit {

    public CurrentUser: UserInfo;
    public roles = {
        admin: 'مدیر'
    };

    constructor() {
        this.CurrentUser = JSON.parse(localStorage.getItem('userInfo'));
    }
    ngOnInit(): void { }
}
