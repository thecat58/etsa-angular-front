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
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TallerComponent } from './pages/taller/taller.component';
import { LoginComponent } from './pages/login/login.component';
import { Error400Component } from './components/error400/error400.component';
import { RejistroComponent } from './pages/rejistro/rejistro.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { CardUsuarioAgendaComponent } from './components/perfil-usuario/card-usuario-agenda/card-usuario-agenda.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DetalleTallerComponent } from './pages/detalle-taller/detalle-taller.component';
import { UbicacionTallerComponent } from './pages/ubicacion-taller/ubicacion-taller.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxToastNotifierModule } from 'ngx-toast-notifier';



@NgModule({
  declarations: [
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
    RejistroComponent,
    PerfilUsuarioComponent,
    CardUsuarioAgendaComponent,
    ModalUploadComponent,
    DetalleTallerComponent,
    UbicacionTallerComponent,


  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FullCalendarModule,
    NgxToastNotifierModule.forRoot(), // NgxToastNotifierModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
