import { Injectable } from '@angular/core';
import { delay, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  readonly isLoading = new Subject<boolean>();

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }
}
