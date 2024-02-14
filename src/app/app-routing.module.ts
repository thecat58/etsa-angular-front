import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TallerComponent } from './pages/taller/taller.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'dashboard',component:HomeComponent},

  {path: 'login',component:LoginComponent, pathMatch: "full"},
  {path: 'taller',component:TallerComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
