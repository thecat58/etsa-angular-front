import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent {

  uploadForm: FormGroup;
  imageUrl: string = '';
  selectedImage: any;  // Agrega esta línea para definir la propiedad

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.uploadForm = this.fb.group({
      image: [null, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onGuardarClick(): void {
    if (this.uploadForm.valid) {
      // Aquí puedes usar this.selectedImage según tus necesidades
      console.log('Guardando datos:', this.uploadForm.value, this.selectedImage);
      this.dialogRef.close();
    }
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
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
