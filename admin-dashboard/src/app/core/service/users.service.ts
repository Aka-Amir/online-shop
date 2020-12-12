import { Injectable } from '@angular/core';
import { UserInfo } from 'shared/models/user-info.interface';

@Injectable()
export class UsersService {
    constructor() {}

    async getUsersList(): Promise<UserInfo[]> {
        // This Is Mock Data
        const returnableValue: UserInfo[] = [
            {
                username: 'amir' ,
                password: 'password',
                role: 'admin'
            } , {
                username: 'Omid' ,
                password: 'Omid.Rmi',
                role: 'analist'
            }
        ];
        return returnableValue;
    }
}
