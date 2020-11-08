import { NgModule } from '@angular/core';
import { RightNavComponent } from './widgets/right-nav/right-nav.component';
import { TopNavComponent } from './widgets/top-nav/top-nav.component';
import { PagesRoutingModule } from 'Pages/pages-routing.module';

@NgModule({
    imports: [PagesRoutingModule],
    declarations: [RightNavComponent, TopNavComponent],
    exports: [RightNavComponent, TopNavComponent],
})
export class SharedModule { }
