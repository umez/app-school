import { Component, OnInit } from '@angular/core';
import { Menu, menuList } from '../../constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  navList: Menu[] = menuList;

  constructor() { }

  ngOnInit() {
    console.log(this.navList);
  }

}
