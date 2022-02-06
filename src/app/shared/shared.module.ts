import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NavModule } from 'ui';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavComponent, HeaderComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    IonicModule,
    NavModule
  ],
  exports: [
    NavComponent,
    FlexLayoutModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderComponent
  ]
})
export class SharedModule { }
