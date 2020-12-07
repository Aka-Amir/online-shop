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
    constructor(private guard: LogGuard , private http: HttpClient ) { }
    private async GetUserPassword(userName: string , userPassword: string): Promise<{response: ResponseType}> {
        return await this.http.post<{response: ResponseType}>('http://192.168.1.105:3000/users' , {
            username: userName ,
            password: userPassword
        }).toPromise();
    }
    async Validate(userName: string, userPassword: string): Promise<void> {
        const requestResult = await this.GetUserPassword(userName , userPassword);
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
