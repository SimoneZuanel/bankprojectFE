import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { ChiSiamoComponent } from './component/chi-siamo/chi-siamo.component';
import { ContactComponent } from './component/contact/contact.component';

import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/private/dashboard/dashboard.component';
import { PrivateComponent } from './component/private/private.component';



const routes: Routes = [
  {path: '',  redirectTo: '/home', pathMatch: 'full' },
  {path: 'home',  component: HomeComponent},
  {path: 'login',  component: LoginComponent},
  {path: 'auth',  component: SignupComponent},
  {path: 'private', component: PrivateComponent, children: [
    {path: '', redirectTo: 'dashboard' , pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {
      path: 'pagamenti-online',
      loadChildren: () => import('./component/private/pagamenti-online/pagamenti.module').then(m => m.PagamentiModule)
    },
    {
      path: 'credit-card',
      loadChildren: () => import('./component/private/credit-card/credito.module').then(m => m.CreditoModule)
    },
    {
      path: 'settings',
      loadChildren: () => import('./component/private/settings/settings.module').then(m => m.SettingsModule)
    }
  ]},
  {path: 'chi-siamo',  component: ChiSiamoComponent},
  {path: 'contact',  component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
