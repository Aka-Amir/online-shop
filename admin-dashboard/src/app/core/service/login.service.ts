import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LogGuard } from '../guards/log.guard';
import { UserInfo } from 'shared/models/user-info.interface';

interface ResponseType {
    loginResult: boolean;
    userRole: 'admin' | 'analist' | 'seller' | 'not valid';
}

@Injectable()
export class LoginService {

    private ApiWorks = false;

    constructor(private guard: LogGuard , private http: HttpClient ) {
        this.http.get<{response: boolean}>('http://192.168.1.105:3000/').subscribe({
            next: (response) => {
                this.ApiWorks = true;
            } ,
            error: () => {
                console.log('Cant Connect To Server');
            } ,
            complete: () => {}
        });
    }
    private GetUserPassword(userName: string , userPassword: string): {response: ResponseType} {
        if(this.ApiWorks) {
            this.http.post<{response: ResponseType}>('http://192.168.1.105:3000/users' , {
                username: userName ,
                password: userPassword
            }).subscribe((res: {response: ResponseType}) => res , err => {
                console.log(0);
            });
        }
        return {response: {loginResult: true , userRole: 'admin'}};
    }
    async Validate(userName: string, userPassword: string): Promise<void> {
        const requestResult = this.GetUserPassword(userName , userPassword);
        console.log(requestResult);
        if (requestResult.response.loginResult && requestResult.response.userRole !== 'not valid') {
            const result = this.guard.LogUserIn({
                username: userName,
                password: userPassword,
                role: requestResult.response.userRole
            });
        }
    }
}
