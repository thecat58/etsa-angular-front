
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalUploadComponent } from '../../modal-upload/modal-upload.component';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { CoreService } from 'src/app/shared/services/core.service';
import { TallerService } from 'src/app/shared/services/taller.service';
import { tallerModel } from 'src/app/shared/models/taller.model';
import { NgxToastService } from 'ngx-toast-notifier';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-perfil-agregar',
  templateUrl: './card-perfil-agregar.component.html',
  styleUrls: ['./card-perfil-agregar.component.css']
})
export class CardPerfilAgregarComponent implements OnInit {
  cardProfile: any[] = [];
  talleres: tallerModel[] = [];
  suscriocion: Subscription | undefined;
  usuarioId: any

  constructor(private dialog: MatDialog,
    private profileService: ProfileService,
    private usuarioService: CoreService,
    private tallerService: TallerService,
    private ngxToastService: NgxToastService,
    private _coreservice: CoreService,
  ) { }

  ngOnInit(): void {

    this.filter();

  
      console.log(this.usuarioId, 'desde el componente usuario venta');

      this.suscriocion = this._coreservice.refresh$.subscribe(()=>{
        this.filter();
      })
  }


  filter(){
    const usuarioIdString = localStorage.getItem('usuarioId');
    this.usuarioId = usuarioIdString ? parseInt(usuarioIdString, 10) : null;

    // Log usuarioId to verify its value
    console.log('Usuario ID:', this.usuarioId);

    // Fetch talleres data from the service
    this.tallerService.traerTaller().subscribe({
      next: (data) => {
        console.log('Datos recibidos del servicio:', data); // Verify the data received from the service

        // Filter talleres based on usuarioId
        this.talleres = data.filter(taller => taller.usuriotaller === this.usuarioId);

        console.log('Talleres filtrados:', this.talleres); // Verify the filtered talleres
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
  abrirModal(): void {
    const dialogRef = this.dialog.open(ModalUploadComponent, {
      width: '500px',
      data: {
        profile: {}
      }  // Puedes pasar datos adicionales al modal si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.profileService.addProfile(result);
        console.log('Perfil guardado:', result);
      }
    });
  }
  
  eliminarTler(event: any) {
    this.tallerService.deleteTaller(event).subscribe(
      () => {
        console.log('Taller eliminado correctamente');
        this.ngxToastService.onSuccess('Éxito', 'Se eliminó el taller');
        // Aquí puedes realizar cualquier acción adicional después de eliminar el taller
      },
      (error: any) => {
        console.error('Error al eliminar el taller:', error);
        this.ngxToastService.onDanger('ERROR', 'No se pudo eliminar');
        // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
      }
    );
  }
  





}
