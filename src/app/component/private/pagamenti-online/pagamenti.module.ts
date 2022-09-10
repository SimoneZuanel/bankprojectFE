import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentiRoutingModule } from './pagamenti-routing.module';
import { PagamentiOnlineComponent } from './pagamenti-online.component';
import { BonificobancarioComponent } from './bonificobancario/bonificobancario.component';
import { OthercardComponent } from './othercard/othercard.component';
import { MycardComponent } from './mycard/mycard.component';
import { CellchargeComponent } from './cellcharge/cellcharge.component';

@NgModule({
  declarations: [
    PagamentiOnlineComponent,
    BonificobancarioComponent,
    CellchargeComponent,
    OthercardComponent,
    MycardComponent
  ],
  imports: [
    CommonModule,
    PagamentiRoutingModule
  ]
})
export class PagamentiModule { }
