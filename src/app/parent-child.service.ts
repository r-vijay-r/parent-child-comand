import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class ParentChildService {
  // Observable string sources
  private messageSendSource = new Subject<string>();
  private messageConfirmedSource = new Subject<string>();

  // Observable string streams
  messageSend$ = this.messageSendSource.asObservable();
  messageConfirmed$ = this.messageConfirmedSource.asObservable();

  // Service message commands
  sendMessage(message: string) {
    this.messageSendSource.next(message);
  }

  confirmMessage(child: string) {
    this.messageConfirmedSource.next(child);
  }
}
