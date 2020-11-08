import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LogGuard } from '../guards/log.guard';
import { UserInfo } from 'shared/models/user-info.interface';

@Injectable()
export class LoginService {
    constructor(private guard: LogGuard) { }
    private async GetUserPassword(userName: string): Promise<string> {
        // Send username to database and get password
        return 'password';
    }
    async Validate(userName: string, userPassword: string): Promise<void> {
        const password = await this.GetUserPassword(userName);
        if (password === userPassword) {
            const result = this.guard.LogUserIn({
                username: userName,
                password: userPassword,
                role: 'admin'
            });
        }
    }
}
