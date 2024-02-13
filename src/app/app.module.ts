import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { CardPerfilComponent } from './components/perfil/card-perfil/card-perfil.component';
import { CardPerfilDatosComponent } from './components/perfil/card-perfil-datos/card-perfil-datos.component';
import { CardPerfilRedesComponent } from './components/perfil/card-perfil-redes/card-perfil-redes.component';
import { CardPerfilAgregarComponent } from './components/perfil/card-perfil-agregar/card-perfil-agregar.component';
import { CardPersonaComponent } from './components/perfil/card-persona/card-persona.component';
import { PerfilComponent } from './components/perfil/perfil/perfil.component';

=======
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 47dc0428bde53dbb6757663dc5e60274cfe5ed2b

@NgModule({
  declarations: [
    NotificationComponent,
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
<<<<<<< HEAD
    CardPersonaComponent,
    CardPerfilComponent,
    CardPerfilDatosComponent,
    CardPerfilRedesComponent,
    CardPerfilAgregarComponent,
    PerfilComponent,
=======
>>>>>>> 47dc0428bde53dbb6757663dc5e60274cfe5ed2b
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
