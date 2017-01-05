import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Message } from 'primeng/primeng';

@Injectable()
export class AlertService {
    private _message: BehaviorSubject<Message> = new BehaviorSubject<Message>(null);
    message: Observable<Message> = this._message.asObservable();

    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this._message.next(null);
                }
            }
        });
    }

    success(summary: string, detail: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this._message.next({ severity: 'success', summary: summary, detail: detail });
    }

    info(summary: string, detail: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this._message.next({ severity: 'info', summary: summary, detail: detail });
    }

    warn(summary: string, detail: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this._message.next({ severity: 'warn', summary: summary, detail: detail });
    }

    error(summary: string, detail: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this._message.next({ severity: 'error', summary: summary, detail: detail });
    }
}
