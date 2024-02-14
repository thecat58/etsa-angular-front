import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'dashboard',component:HomeComponent},

  {path: 'login',component:LoginComponent, pathMatch: "full"},
  {path: 'taller',component:TallerComponent}

  
>>>>>>> 47dc0428bde53dbb6757663dc5e60274cfe5ed2b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
