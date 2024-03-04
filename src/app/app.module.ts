import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { CardPerfilComponent } from './components/perfil/card-perfil/card-perfil.component';
import { CardPerfilDatosComponent } from './components/perfil/card-perfil-datos/card-perfil-datos.component';
import { CardPerfilRedesComponent } from './components/perfil/card-perfil-redes/card-perfil-redes.component';
import { CardPerfilAgregarComponent } from './components/perfil/card-perfil-agregar/card-perfil-agregar.component';
import { CardPersonaComponent } from './components/perfil/card-persona/card-persona.component';
import { PerfilComponent } from './components/perfil/perfil/perfil.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TallerComponent } from './pages/taller/taller.component';
import { LoginComponent } from './pages/login/login.component';
import { Error400Component } from './components/error400/error400.component';
import { RejistroComponent } from './pages/rejistro/rejistro.component';

@NgModule({
  declarations: [
    NotificationComponent,
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    CalendarComponent,
    HomeComponent,
    CardPerfilAgregarComponent,
    CardPersonaComponent,
    CardPerfilRedesComponent,
    CardPerfilComponent,
    CardPerfilDatosComponent,
    PerfilComponent,
    TallerComponent,
    Error400Component,
    RejistroComponent


  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
