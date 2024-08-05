import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  private notificationsSubject = new BehaviorSubject<string[]>([]);
  notifications$ = this.notificationsSubject.asObservable();

  addNotification(message: string) {
    const notifications = this.notificationsSubject.value;
    notifications.push(message);
    this.notificationsSubject.next(notifications);
  }

  removeNotification(index: number) {
    const notifications = this.notificationsSubject.value;
    notifications.splice(index, 1);
    this.notificationsSubject.next(notifications);
  }
}

