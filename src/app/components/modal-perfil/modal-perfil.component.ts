import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TallerService } from 'src/app/shared/services/taller.service';
import { NgxToastService } from 'ngx-toast-notifier';
import { UserModel } from 'src/app/shared/models/user.model';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.css']
})
export class ModalPerfilComponent {
  imageUrl: string = '';
  foto: any;
  API_URL = environment.http;
  fromUsuario!: FormGroup;
  selectedFile: File | null = null; // Definir la propiedad selectedFile aquí

  constructor(
    public dialogRef: MatDialogRef<ModalUploadComponent>,
    private formulario: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: UserModel
  ) {
    this.buildFormLogin();
    this.setUsuario();
  }

  cerrar(): void {
    this.dialogRef.close();
  }

  private buildFormLogin() {
    this.fromUsuario = this.formulario.group({
      foto: ['', Validators.required],
      name: ['', Validators.required],
      correo: ['', Validators.required],
      primer_apellido: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      n_iemaildentificacion: ['', Validators.required],

    });
  }

  setUsuario() {
    console.log(this.data?.foto, 'jejejejeje');
    console.log(this.foto, 'foto de data lllenado');

    if (this.data && this.data.id) {
      this.fromUsuario.patchValue({
        id: this.data.id,
        name: this.data.primer_nombre,
        correo: this.data.correo,
        primer_apellido: this.data.primer_apellido,
        foto: this.data.foto,
        password: this.data.password,
        email: this.data.email,
        n_iemaildentificacion: this.data.n_identificacion
      });
    }
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Asignar el archivo seleccionado a la propiedad selectedFile
      this.selectedFile = file;
    }
  }



}
