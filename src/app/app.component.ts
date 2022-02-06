import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { ScreenSizeService } from './shared/services/screen-size.services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private menuCtrl: MenuController, private screenSize: ScreenSizeService) { }

  ngOnInit(): void {
    this.screenSize.mediaDevice().pipe(distinctUntilChanged((prev, curr) => prev.mqAlias === curr.mqAlias)).subscribe(
      res => {
        console.log(res.mqAlias);
        if (res.mqAlias === 'xs' || res.mqAlias === 'sm') {
          this.menuCtrl.enable(true);
        } else {
          this.menuCtrl.enable(false);
        }
      }
    );
  }
}
