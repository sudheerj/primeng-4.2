import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {TreeModule} from 'primeng/components/tree/tree';
import {GrowlModule} from 'primeng/components/growl/growl';
import {TreeDemoRoutingModule} from './treedemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {TreeDemoComponent} from './treedemo.component';


@NgModule({
  imports: [
    TreeModule,
    TreeDemoRoutingModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    TreeDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class TreeDemoModule {
}
