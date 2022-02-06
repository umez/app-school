import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService{

  constructor(public mediaObserver: MediaObserver) { }

  mediaDevice(): Observable<MediaChange> {
    return this.mediaObserver.asObservable()
      .pipe(
        map((changes: MediaChange[]) =>  changes.filter(item => item.mqAlias)[0])
      );
  }
}
