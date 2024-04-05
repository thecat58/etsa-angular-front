import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tallerModel } from 'src/app/shared/models/taller.model';
import { TallerService } from 'src/app/shared/services/taller.service';
import { NgxToastService } from 'ngx-toast-notifier';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';


@Component({
  selector: 'app-modal-agenda',
  templateUrl: './modal-agenda.component.html',
  styleUrls: ['./modal-agenda.component.css']
})
export class ModalAgendaComponent {
  talleres: tallerModel[] = [];
  fromTaller!: FormGroup;
  imageUrl: string = '';
  fotollena = File;
  usuarioId: any
  selectedImage: any;
  kike: any // Agrega esta línea para definir la propiedad

  constructor(
    public dialogRef: MatDialogRef<ModalUploadComponent>,
    private _servicio: TallerService,
    private ngxToastService: NgxToastService,
    @Inject(MAT_DIALOG_DATA) public data?: tallerModel

  ){}
  ngOnInit(): void { }

  closeModal(): void {
    this.dialogRef.close();
  }

}

