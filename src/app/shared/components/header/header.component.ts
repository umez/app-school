import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  openMenuBol = false;

  constructor( private menu: MenuController ) { }

  ngOnInit() {}

  openMenu(): void {
    this.menu.open();
  }

}
