import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    locale: esLocale // Configuración del locale en español
  };
  constructor(private httpClient: HttpClient) { }
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }
  ngOnInit() {
    setTimeout(() => {
      this.httpClient.get<any[]>('/event.php')
        .subscribe((res: any) => {
          this.Events = res; // Asignar los eventos directamente, no es necesario push
          console.log(this.Events);
          // Actualizar las opciones del calendario después de recibir los eventos
          this.calendarOptions = {
            ...this.calendarOptions,
            events: this.Events
          };
        });
    }, 2200);
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        events: this.Events,
        dateClick: this.onDateClick.bind(this),
        locale: esLocale // Asegúrate de incluir el locale en esta configuración también
      };
    }, 2500);
  }
}
