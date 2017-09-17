import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SlideMenuDemoComponent} from './slidemenudemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: SlideMenuDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SlideMenuDemoRoutingModule {
}
