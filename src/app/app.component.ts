import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'New features',
        items: [
          {label: 'AutoComplete', icon: 'fa-refresh', routerLink: ['/autocomplete']},
          {label: 'Dropdown', icon: 'fa-refresh', routerLink: ['/dropdown']},
          {label: 'Tooltip', icon: 'fa-refresh', routerLink: ['/tooltip']},
          {label: 'Calendar', icon: 'fa-refresh', routerLink: ['/calendar']},
          {label: 'Growl', icon: 'fa-refresh', routerLink: ['/growl']},
          {label: 'MenuBar', icon: 'fa-refresh', routerLink: ['/menubar']},
          {label: 'Spinner', icon: 'fa-refresh', routerLink: ['/spinner']},
          {label: 'DataTable', icon: 'fa-refresh', routerLink: ['/datatable']},
          {label: 'MultiSelect', icon: 'fa-refresh', routerLink: ['/multiselect']},
          {label: 'InputText', icon: 'fa-refresh', routerLink: ['/inputtext']},
          {label: 'Terminal', icon: 'fa-refresh', routerLink: ['/terminal']},
          {label: 'Tree', icon: 'fa-refresh', routerLink: ['/tree']},
          {label: 'SlideMenu', icon: 'fa-refresh', routerLink: ['/slidemenu']},
          {label: 'Messages', icon: 'fa-refresh', routerLink: ['/messages']}
        ]
      },
      {
        label: 'Defect fixes',
        items: [
          {label: 'RC1', icon: 'fa-refresh', url: "https://www.primefaces.org/primeng-4-2-0-rc1-released/"},
          {label: 'Final', icon: 'fa-refresh', url: "https://www.primefaces.org/primeng-4-2-0-final-released/"},
          {label: '4.2.1', icon: 'fa-refresh', url: "https://www.primefaces.org/primeng-4-2-1-released/"}
        ]
      }];
  }
}
