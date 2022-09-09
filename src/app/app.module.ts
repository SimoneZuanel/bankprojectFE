import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';

import { HomeComponent } from './component/home/home.component';
import { PrivateComponent } from './component/private/private.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './component/footer/footer.component';
import { ChiSiamoComponent } from './component/chi-siamo/chi-siamo.component';
import { ContactComponent } from './component/contact/contact.component';
import { BodyComponent } from './component/private/body/body.component';
import { DashboardComponent } from './component/private/dashboard/dashboard.component';
import { SubmenuComponent } from './component/private/submenu/submenu.component';
import { LoginComponent } from './component/auth/login/login.component';
import { SignupComponent } from './component/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivateComponent,
    FooterComponent,
    ChiSiamoComponent,
    ContactComponent,
    BodyComponent,
    DashboardComponent,
    SubmenuComponent,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
