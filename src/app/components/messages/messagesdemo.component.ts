import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'section',
  templateUrl: 'messagesdemo.component.html',
  providers: [MessageService]
})
export class MessagesDemoComponent {
  msgs: Message[] = [];

  activeIndex: number = 0;

  clicks: number = 0;

  constructor(private messageService: MessageService) {}

  showViaService() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }
  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
