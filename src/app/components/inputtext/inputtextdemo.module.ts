import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {GrowlModule} from 'primeng/components/growl/growl';
import {InputTextDemoRoutingModule} from './inputtextdemo-routing.module';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {InputTextDemoComponent} from './inputtextdemo.component';

@NgModule({
    imports: [
        InputTextModule,
        InputTextDemoRoutingModule,
        WizardModule,
        GrowlModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
      InputTextDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class InputTextDemoModule {
}
