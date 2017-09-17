import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {InputTextDemoComponent} from './inputtextdemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: InputTextDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class InputTextDemoRoutingModule {
}
