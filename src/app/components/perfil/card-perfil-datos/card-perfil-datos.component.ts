import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from 'src/app/shared/models/user.model';
import { ModalPerfilComponent } from '../../modal-perfil/modal-perfil.component';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-card-perfil-datos',
  templateUrl: './card-perfil-datos.component.html',
  styleUrls: ['./card-perfil-datos.component.css']
})
export class CardPerfilDatosComponent {
  usuarioGuardado: UserModel | null = null;
  

  constructor(private dialog: MatDialog,
    private profileService: ProfileService,) { }

  ngOnInit(): void {
    const usuarioGuardadoString = localStorage.getItem('usuario');
    if (usuarioGuardadoString !== null) {
      this.usuarioGuardado = JSON.parse(usuarioGuardadoString);
    } else {
      console.log('No se encontraron datos de usuario en el localStorage');
    }
  }

  abrirediatModal(event:UserModel): void {
    const dialogRef = this.dialog.open(ModalPerfilComponent,{
      width: '500px',
      data: event 
      
      // Puedes pasar datos adicionales al modal si es necesario
    });
console.log('Perfil guardado:', event);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.profileService.addProfile(result);
        console.log('Perfil guardado:', result);
      }
    });
  }
  
}
