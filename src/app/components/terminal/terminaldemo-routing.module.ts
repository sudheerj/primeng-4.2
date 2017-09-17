import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TerminalDemoComponent} from './terminaldemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: TerminalDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TerminalDemoRoutingModule {
}
