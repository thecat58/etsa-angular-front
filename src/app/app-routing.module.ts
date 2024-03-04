import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { TallerComponent } from './pages/taller/taller.component';
import { Error400Component } from './components/error400/error400.component';
import { PerfilComponent } from './components/perfil/perfil/perfil.component';
import { RejistroComponent } from './pages/rejistro/rejistro.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'dashboard',component:HomeComponent},
  { path: 'perfil-venta', component: PerfilComponent },
  {path: 'login',component:LoginComponent, pathMatch: "full"},
  {path: 'taller',component:TallerComponent},
  {path: 'rejistro',component:RejistroComponent},
  { path: '**', component: Error400Component },
  {path: 'fullcalendario',component: CalendarComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
