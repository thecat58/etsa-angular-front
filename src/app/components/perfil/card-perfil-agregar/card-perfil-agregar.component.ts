
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalUploadComponent } from '../../modal-upload/modal-upload.component';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import { CoreService } from 'src/app/shared/services/core.service';
import { TallerService } from 'src/app/shared/services/taller.service';
import { tallerModel } from 'src/app/shared/models/taller.model';

@Component({
  selector: 'app-card-perfil-agregar',
  templateUrl: './card-perfil-agregar.component.html',
  styleUrls: ['./card-perfil-agregar.component.css']
})
export class CardPerfilAgregarComponent implements OnInit {
  cardProfile: any[] = [];
  talleres: tallerModel[] = [];

  usuarioId:any

  constructor(private dialog: MatDialog, 
    private profileService: ProfileService,
    private usuarioService: CoreService,
    private tallerService: TallerService) { }
    ngOnInit(): void {
      // Retrieve usuarioId from localStorage
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
    
      console.log(this.usuarioId, 'desde el componente usuario venta');
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
    




}
