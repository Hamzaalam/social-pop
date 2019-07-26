import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { MyDriveComponent } from './dashboard/my-drive/my-drive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    NavBarComponent,
    ProfileComponent,
    MyDriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
