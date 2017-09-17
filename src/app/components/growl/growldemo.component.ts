import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'section',
  templateUrl: 'growldemo.component.html',
  providers: [MessageService]
})
export class GrowlDemoComponent {
  msgs: Message[] = [];

  activeIndex: number = 0;

  clicks: number = 0;

  constructor(private messageService: MessageService) {}

  showViaService() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  clearViaService() {
    this.messageService.clear();
  }

  clear() {
    this.msgs = [];
  }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
