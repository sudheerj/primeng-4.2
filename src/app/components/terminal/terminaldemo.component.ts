import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {TerminalService} from 'primeng/components/terminal/terminalservice';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'section',
  templateUrl: 'terminaldemo.component.html',
  providers: [TerminalService]
})

export class TerminalDemoComponent {
  msgs: Message[] = [];

  activeIndex: number = 0;

  subscription: Subscription;

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe(command => {
      let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
      this.terminalService.sendResponse(response);
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
