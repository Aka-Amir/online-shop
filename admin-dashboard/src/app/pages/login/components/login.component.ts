import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'Core/service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private authService: LoginService) {
        localStorage.setItem('userInfo' , '' );
        localStorage.setItem('isLogged' , '' );
    }

    LoginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });


    ngOnInit(): void {
    }

    getForm(): false {
        const form = this.LoginForm.controls;
        this.authService.Validate(form.username.value, form.password.value);
        return false;
    }
}
