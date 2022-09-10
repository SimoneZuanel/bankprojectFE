import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';



const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
