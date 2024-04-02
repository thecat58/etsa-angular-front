import { Component } from '@angular/core';
import { AgendaModel } from 'src/app/shared/models/agenda.model';
import { AgendaService } from 'src/app/shared/services/agenda.service';

@Component({
  selector: 'app-card-usuario-agenda',
  templateUrl: './card-usuario-agenda.component.html',
  styleUrls: ['./card-usuario-agenda.component.css']
})
export class CardUsuarioAgendaComponent {
  agendas:AgendaModel[]=[]

  constructor(
    private _agendaservice:AgendaService
  ) {

  }
  ngOnInit(): void {
    this.traeragenda()
  }

  traeragenda(){
    this._agendaservice.getagendas().subscribe({
      next: (data) => {
        console.log('Datos recibidos del servicio:', data); // Verifica los datos recibidos del servicio
        this.agendas = data;
      },
      error: (err: any) => {
        console.error(err);
        
      } 
    })
  }

}
