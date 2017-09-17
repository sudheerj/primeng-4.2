import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'autocomplete', loadChildren: './components/autocomplete/autocompletedemo.module#AutocompleteDemoModule'},
      {path: 'dropdown', loadChildren: './components/dropdown/dropdowndemo.module#DropdownDemoModule'},
      {path: 'tooltip', loadChildren: './components/tooltip/tooltipdemo.module#TooltipDemoModule'},
      {path: 'calendar', loadChildren: './components/calendar/calendardemo.module#CalendarDemoModule'},
      {path: 'growl', loadChildren: './components/growl/growldemo.module#GrowlDemoModule'},
      {path: 'menubar', loadChildren: './components/menubar/menubardemo.module#MenubarDemoModule'},
      {path: 'spinner', loadChildren: './components/spinner/spinnerdemo.module#SpinnerDemoModule'},
      {path: 'datatable', loadChildren: './components/datatable/datatabledemo.module#DataTableDemoModule'},
      {path: 'multiselect', loadChildren: './components/multiselect/multiselectdemo.module#MultiSelectDemoModule'},
      {path: 'inputtext', loadChildren: './components/inputtext/inputtextdemo.module#InputTextDemoModule'},
      {path: 'terminal', loadChildren: './components/terminal/terminaldemo.module#TerminalDemoModule'},
      {path: 'tree', loadChildren: './components/tree/treedemo.module#TreeDemoModule'},
      {path: 'slidemenu', loadChildren: './components/slidemenu/slidemenudemo.module#SlideMenuDemoModule'},
      {path: 'messages', loadChildren: './components/messages/messagesdemo.module#MessagesDemoModule'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
