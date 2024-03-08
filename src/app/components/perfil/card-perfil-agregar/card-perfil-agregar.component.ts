
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalUploadComponent } from '../../../modal-upload/modal-upload.component'; 
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-card-perfil-agregar',
  templateUrl: './card-perfil-agregar.component.html',
  styleUrls: ['./card-perfil-agregar.component.css']
})
export class CardPerfilAgregarComponent  implements OnInit {
  cardProfile: any[] = [];
          
  constructor(private dialog: MatDialog, private profileService: ProfileService) {}

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
  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(profiles => {
      this.cardProfile = profiles;
    });
  } 

}
