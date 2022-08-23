import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor() { }

  private _refresh = new Subject<void>()

  setRefresh() {
    this._refresh.next()
  }

  getRefresh() {
    return this._refresh.asObservable()
  }
}
