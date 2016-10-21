import { Component, Input, OnDestroy } from '@angular/core';
import { ParentChildService } from '../parent-child.service';
import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnDestroy {
  @Input() child: string;
  message = '<no message received>';
  confirmed = false;
  send = false;
  subscription: Subscription;

  constructor(private messageService: ParentChildService) {
    this.subscription = messageService.messageSend$.subscribe(
      message => {
        this.message = message;
        this.send = true;
        this.confirmed = false;
    });
  }

  confirm() {
    this.confirmed = true;
    this.messageService.confirmMessage(this.child);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
