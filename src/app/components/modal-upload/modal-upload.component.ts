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
  uploadForm: FormGroup;
  imageUrl: string = '';
  fotollena = File;

  selectedImage: any;  // Agrega esta línea para definir la propiedad


  constructor(
    private formulario: FormBuilder,
    public dialogRef: MatDialogRef<ModalUploadComponent>,
    private _servicio: TallerService,
    private ngxToastService: NgxToastService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.uploadForm = this.formulario.group({
      image: [null, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }
  onNoClick() {
    // if (this.uploadForm.valid) {
    //   const tallernuevo: tallerModel = {
    //     foto: '',
    //     nombre: this.uploadForm.value.name,
    //     ubicacion: this.uploadForm.value.direccion,
    //     usuriotaller: '1',
    //     descripcion: this.uploadForm.value.description,
    //   };
    //   console.log(tallernuevo);
  
    //   this._servicio.crarTaller(tallernuevo).subscribe({
    //     next: (response) => {
    //     },
    //     error: (error) => {
    //       this.ngxToastService.onDanger('EROR','COMPRUEBE LOS DATOS O REJISTRESE')
    //     },
    //     complete: () => {
    //       this.ngxToastService.onSuccess('exitoso','')
    //     }
    //   });
    // } else {
    //   console.log('Formulario inválido');
    // }
  }

  cerrar(): void {
    this.dialogRef.close();
  }



  onImageSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.fotollena=file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);

      this.uploadForm.patchValue({
        image: file
      });

      this.selectedImage = file;  // Asigna el valor de 'file' a 'selectedImage'
    }
  }
}
