import { Component } from '@angular/core';
import { ParentChildService }     from '../parent-child.service';
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  providers: [ParentChildService]
})
export class ParentComponentComponent{
  children = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  message: string[] = [];
  nextMessage = 0;

  constructor(private messageService: ParentChildService) {
    messageService.messageConfirmed$.subscribe(
      children => {
        this.history.push(`${children}  said done`);
      });
  }
  active: boolean=true;
  sendMessage(message: string) {
    let currentMessage = this.message[this.nextMessage++];
    this.messageService.sendMessage(message);
    this.message.push(message);
    this.history.push(`Message "${message}" send`);
    this.active=false;
    setTimeout(()=>this.active=true,0);
    //if (this.nextMessage >= this.message.length) { this.nextMessage = 0; }
  }
 }