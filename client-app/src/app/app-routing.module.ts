import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { LoginComponent } from './home/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
    {path:'',redirectTo:'/home/login',pathMatch:'full'},
    {path:'home',component:HomeComponent,
     children:[
        {path:'sign-up', component:SignUpComponent},
        {path:'login', component:LoginComponent}
     ] 
    },
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
