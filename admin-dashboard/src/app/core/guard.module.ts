import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogGuard } from './guards/log.guard';
import { LoginService } from './service/login.service';
import { ProductsService } from './service/products.service';

@NgModule({
    imports: [CommonModule],
    providers: [LogGuard, LoginService, ProductsService]
})
export class GuardModule { }
