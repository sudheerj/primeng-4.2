import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {SlideMenuModule} from 'primeng/components/slidemenu/slidemenu';
import {GrowlModule} from 'primeng/components/growl/growl';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {SlideMenuDemoRoutingModule} from './slidemenudemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {SlideMenuDemoComponent} from './slidemenudemo.component';


@NgModule({
  imports: [
    SlideMenuModule,
    SlideMenuDemoRoutingModule,
    InputTextModule,
    ButtonModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    SlideMenuDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class SlideMenuDemoModule {
}
