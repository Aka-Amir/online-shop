import { Component, OnInit } from '@angular/core';
import { UserInfo , RolesToPersian } from 'shared/models/user-info.interface';

@Component({
    selector: 'app-right-nav',
    templateUrl: './right-nav.component.html',
    styleUrls: ['./right-nav.component.scss', './right-nav-dark.component.scss']
})
export class RightNavComponent implements OnInit {
    public CurrentUser: UserInfo;
    public roles = RolesToPersian;

    constructor() {
        this.CurrentUser = JSON.parse(localStorage.getItem('userInfo'));
    }

    ngOnInit(): void { }

    logOut(): void {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('isLogged');
        window.location.reload();
    }
}
