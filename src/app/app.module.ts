import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavAdminComponent } from './nav/nav-admin/nav-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavFooterComponent } from './nav/nav-footer/nav-footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavTopComponent } from './nav/nav-top/nav-top.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavAdminComponent,
    DashboardComponent,
    NavFooterComponent,
    LoginComponent,
    RegisterComponent,
    NavTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
