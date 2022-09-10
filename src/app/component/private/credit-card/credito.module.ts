import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditoRoutingModule } from './credito-routing.module';

import { CreditCardComponent } from './credit-card.component';
import { FirstCardComponent } from './first-card/first-card.component';
import { SecondCardComponent } from './second-card/second-card.component';


@NgModule({
  declarations: [
    CreditCardComponent,
    FirstCardComponent,
    SecondCardComponent
  ],
  imports: [
    CommonModule,
    CreditoRoutingModule
  ]
})
export class CreditoModule { }
