import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonificobancarioComponent } from './bonificobancario/bonificobancario.component';
import { OthercardComponent } from './othercard/othercard.component';
import { MycardComponent } from './mycard/mycard.component';
import { CellchargeComponent } from './cellcharge/cellcharge.component';

const routes: Routes = [
  {
    path:'bonifico-bancario',
    component: BonificobancarioComponent
  },

  {
    path: 'cellcharge',
    component: CellchargeComponent
  },

  {
    path: 'mycard',
    component: MycardComponent
  },

  {
    path: 'othercard',
    component: OthercardComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentiRoutingModule { }
