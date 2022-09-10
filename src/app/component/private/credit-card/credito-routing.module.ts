import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstCardComponent } from './first-card/first-card.component';
import { SecondCardComponent } from './second-card/second-card.component';

const routes: Routes = [
  {
    path: 'conto1',
    component: FirstCardComponent
  },

  {
    path: 'conto2',
    component: SecondCardComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditoRoutingModule { }
