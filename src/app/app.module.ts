import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    NotificationComponent,
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    CalendarComponent,
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
