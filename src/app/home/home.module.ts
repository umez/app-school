import { SharedModule } from './../shared/shared.module';
import { NavModule, UiModule } from 'ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    UiModule,
    NavModule,
    SharedModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
