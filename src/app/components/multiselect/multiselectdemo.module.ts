import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {MultiSelectModule} from 'primeng/components/multiselect/multiselect';
import {GrowlModule} from 'primeng/components/growl/growl';
import {MultiSelectDemoRoutingModule} from './multiselectdemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {MultiSelectDemoComponent} from './multiselectdemo.component';


@NgModule({
    imports: [
        MultiSelectModule,
        MultiSelectDemoRoutingModule,
        WizardModule,
        GrowlModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
      MultiSelectDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class MultiSelectDemoModule {
}
