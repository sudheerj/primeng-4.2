import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {TerminalModule} from 'primeng/components/terminal/terminal';
import {GrowlModule} from 'primeng/components/growl/growl';
import {TerminalDemoRoutingModule} from './terminaldemo-routing.module';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {TerminalDemoComponent} from './terminaldemo.component';

@NgModule({
    imports: [
      TerminalModule,
      TerminalDemoRoutingModule,
        WizardModule,
        GrowlModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
      TerminalDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class TerminalDemoModule {
}
