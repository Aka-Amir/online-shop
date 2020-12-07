import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { UserInfo , RolesToPersian } from 'shared/models/user-info.interface';
import { UsersService } from 'Core/service/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    public AllUsers: UserInfo[];
    public Translator = RolesToPersian;
    public editMode = false;

    private currentUserInfo: number;

    @ViewChild('NameInput') nameInput: ElementRef;
    @ViewChild('PasswordInput') passwordInput: ElementRef;

    usersForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('') ,
        userRole: new FormControl()
    });

    constructor(private users: UsersService) {
        users.getUsersList()
            .then(list => this.AllUsers = list)
            .catch(err => {
                console.log('We Got An Error');
            }
        );
    }

    ngOnInit(): void {
        document.querySelectorAll('button[type="reset"]')[0].addEventListener('click' , e => {
            // Send Delete Request
            (this.currentUserInfo !== 0) ? this.AllUsers.splice(this.currentUserInfo , 1) : alert('تعداد کاربران حداقل باید یک نفر باشند');
            this.editMode = false;
        });
        document.querySelectorAll('button[type="button"]')[0].addEventListener('click' , e => {
            (this.editMode) ? this.EditUser(this.currentUserInfo) : this.AddUser() ;
        });
        document.querySelectorAll('div.plus')[0].addEventListener('click' , e => {
            this.usersForm.controls.username.setValue('');
            this.usersForm.controls.password.setValue('');
            this.usersForm.controls.userRole.setValue('');
            this.editMode = false;
        });
    }

    public showUserInfo(clickedUserInfo: UserInfo , UserIndex: number ): void {

        this.currentUserInfo = UserIndex;

        this.usersForm.controls.username.setValue(clickedUserInfo.username);
        this.usersForm.controls.password.setValue(clickedUserInfo.password);
        this.usersForm.controls.userRole.setValue(clickedUserInfo.role);

        this.editMode = true;
    }

    private EditUser(userIndex: number): void {
        this.AllUsers[userIndex].username = this.usersForm.controls.username.value;
        this.AllUsers[userIndex].password = this.usersForm.controls.password.value;
        this.AllUsers[userIndex].role = this.usersForm.controls.userRole.value;

        // send To Data server
    }

    private AddUser(): void {
        const NewUser: UserInfo = {
            username: this.usersForm.controls.username.value ,
            password: this.usersForm.controls.password.value ,
            role: this.usersForm.controls.userRole.value ,
        };
        this.AllUsers.push(NewUser);
    }
}
