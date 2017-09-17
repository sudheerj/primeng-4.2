import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {MessagesModule} from 'primeng/components/messages/messages';
import {ButtonModule} from 'primeng/components/button/button';
import {MessagesDemoRoutingModule} from './messagesdemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {MessagesDemoComponent} from './messagesdemo.component';


@NgModule({
  imports: [
    MessagesDemoRoutingModule,
    WizardModule,
    MessagesModule,
    ButtonModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    MessagesDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class MessagesDemoModule {
}
