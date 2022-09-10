import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    SettingsComponent,
    AccountComponent,
    HomeComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
