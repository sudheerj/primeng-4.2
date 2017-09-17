import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'calendardemo.component.html',
})
export class CalendarDemoComponent {
    msgs: Message[] = [];

    activeIndex: number = 0;

    date1: Date;

    date2: Date;

    onToday($event) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'The calendar today button is clicked'});
    }

    onClear($event) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'The calendar clear button is clicked'});
    }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
