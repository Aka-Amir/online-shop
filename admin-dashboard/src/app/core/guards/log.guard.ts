import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserInfo } from 'shared/models/user-info.interface';

@Injectable()
export class LogGuard implements CanActivate {
    constructor(private router: Router) { }

    private isLogged = false;
    protected userInfo: UserInfo;

    canActivate(): boolean {
        const logState = localStorage.getItem('isLogged');
        try {
            if (logState.toString() === 'true') {
                this.isLogged = true;
                this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
            }
        } catch (e ) {
            this.router.navigate(['']);
        }
        return this.isLogged;
    }

    LogUserIn(userInfo: UserInfo): boolean {
        if (userInfo === null || !this.isLogged) {
            this.userInfo = userInfo;
            this.isLogged = true;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            localStorage.setItem('isLogged', `${this.isLogged}`);
            this.router.navigateByUrl('/dashboard');
        }
        return true;
    }
}
