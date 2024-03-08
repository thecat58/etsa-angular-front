import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalUploadComponent } from '../../../modal-upload/modal-upload.component';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  constructor(public dialog: MatDialog) {}

  abrirModal(): void {
    const dialogRef = this.dialog.open(ModalUploadComponent, {
      width: '500px', // ajusta el ancho según tus necesidades
      data: {} // puedes pasar datos adicionales al modal si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar el resultado después de cerrar el modal
      console.log('Modal cerrado', result);
    });
  }


}
