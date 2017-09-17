import {Component, OnInit} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'section',
  templateUrl: 'menubardemo.component.html',
})
export class MenubarDemoComponent implements OnInit {
  msgs: Message[] = [];

  activeIndex: number = 0;

  items: MenuItem[];

  itemsSeparator: MenuItem[];

  ngOnInit() {

    this.itemsSeparator = [
      {
        label: 'File',
        icon: 'fa-file-o',
        separator: true,
        title: 'Click File',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          separator: true,
          items: [
            {label: 'Project', separator: true, title: 'Click Project'},
            {label: 'Other', separator: true, title: 'Click Other'},
          ],
          title: 'Click New'
        },
          {label: 'Open', separator: true, title: 'Click Open'},
          {label: 'Quit', separator: true, title: 'Click Quit'}
        ]
      }];
    this.items = [
      {
        label: 'File',
        icon: 'fa-file-o',
        title: 'Click File',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          title: 'Click New',
          items: [
            {label: 'Project', title: 'Click Project'},
            {label: 'Other', title: 'Click Other'},
          ]
        },
          {label: 'Open', title: 'Click Open'},
          {label: 'Quit', title: 'Click Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        title: 'Click Edit',
        items: [
          {label: 'Undo', icon: 'fa-mail-forward', title: 'Click Undo'},
          {label: 'Redo', icon: 'fa-mail-reply', title: 'Click Redo'}
        ]
      },
      {
        label: 'Help',
        icon: 'fa-question',
        title: 'Click Help',
        items: [
          {
            label: 'Contents',
            title: 'Click Contents'
          },
          {
            label: 'Search',
            icon: 'fa-search',
            title: 'Click Search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ],
                title: 'Click Text'
              },
              {
                label: 'File',
                title: 'Click File'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        title : 'Click Actions',
        items: [
          {
            label: 'Edit',
            icon: 'fa-refresh',
            title: 'Click Edit',
            items: [
              {label: 'Save', icon: 'fa-save', title: 'Click Save'},
              {label: 'Update', icon: 'fa-save', title: 'Click Update'},
            ]
          },
          {
            label: 'Other',
            icon: 'fa-phone',
            title: 'Click Other',
            items: [
              {label: 'Delete', icon: 'fa-minus', title: 'Click Delete'}
            ]
          }
        ]
      }
    ];
  }


  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
