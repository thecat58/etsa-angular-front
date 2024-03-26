import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tallerModel } from 'src/app/shared/models/taller.model';
import { TallerService } from 'src/app/shared/services/taller.service';
import { NgxToastService } from 'ngx-toast-notifier';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent {
  talleres: tallerModel[] = [];
  fromTaller!: FormGroup;
  imageUrl: string = '';
  fotollena = File;
  usuarioId: any
  selectedImage: any;
  kike: any // Agrega esta línea para definir la propiedad


  constructor(
    private formulario: FormBuilder,
    public dialogRef: MatDialogRef<ModalUploadComponent>,
    private _servicio: TallerService,
    private ngxToastService: NgxToastService,
  ) {
    this.buildFormLogin();
  }

  private buildFormLogin() {
    this.fromTaller = this.formulario.group({
      foto: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }
 
  guardarTaller(event: any) {
    const fotoInput = event.target.querySelector('#imageInput');
    const usuarioIdString = localStorage.getItem('usuarioId');
    this.usuarioId = usuarioIdString ? parseInt(usuarioIdString, 10) : null;
    if (fotoInput && fotoInput.files && fotoInput.files.length > 0) {
      const foto = fotoInput.files[0];
      if (foto && this.fromTaller.valid) {
        const nuevoRegistro: tallerModel = {
          nombre: this.fromTaller.value.nombre,
          ubicacion: this.fromTaller.value.direccion,
          descripcion: this.fromTaller.value.description,
          foto: foto,
          usuriotaller: this.usuarioId
        };
  
        // Proceed with the registration
        console.log('Nuevo registro:', nuevoRegistro);
  
        // Add the new registration to the array of registrations
        this._servicio.crarTaller(nuevoRegistro).subscribe({
          next: (response) => {
            console.log('Respuesta del backend:', response);
            this.ngxToastService.onSuccess('', '¡Registro exitoso!');
          },
          error: (error) => {
            console.error('Error en el registro:', error);
            this.ngxToastService.onDanger('ERROR', '¡Error al registrar! Compruebe los datos.');
          },
          complete: () => {
            console.log('Registro completo');
          }
        });
      } else {
        console.error('Imagen no válida o formulario inválido');
        this.ngxToastService.onDanger('ERROR', '¡Error al registrar! Compruebe los datos.');
      }
    } else {
      console.error('Imagen no seleccionada');
      this.ngxToastService.onDanger('ERROR', '¡Error al registrar! Seleccione una imagen.');
    }
  }
  


  cerrar(): void {
    this.dialogRef.close();
  }


  onImageSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.fotollena = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }


}
