import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GuardModule } from 'Core/guard.module';
import { LoginComponent } from './components/login.component';
@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        GuardModule
    ],
    exports: [],
    providers: [],
})
export class LoginModule { }
