import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { AgendaModel } from 'src/app/shared/models/agenda.model';
import { AgendaService } from 'src/app/shared/services/agenda.service';
import { ModalAgendaComponent } from 'src/app/components/modal-agenda/modal-agenda.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-card-usuario-agenda',
  templateUrl: './card-usuario-agenda.component.html',
  styleUrls: ['./card-usuario-agenda.component.css']
})
export class CardUsuarioAgendaComponent implements OnInit {
  agendas: AgendaModel[] = [];

  constructor(
    private dialog: MatDialog,
    private modalService: ModalService,
    private _agendaservice: AgendaService
  ) {}

  ngOnInit(): void {
    this.traeragenda();
  }

  traeragenda(): void {
    this._agendaservice.getagendas().subscribe({
      next: (data) => {
        console.log('Datos recibidos del servicio:', data); // Verifica los datos recibidos del servicio
        this.agendas = data;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  
  abrirediatModal(): void {
    const dialogRef = this.dialog.open(ModalAgendaComponent,{
      width: '500px',
      // data: event  // Puedes pasar datos adicionales al modal si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.profileService.addProfile(result);
        // console.log('Perfil guardado:', result);
      }
    });
  }
}
