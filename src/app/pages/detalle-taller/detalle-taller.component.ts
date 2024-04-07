import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxToastService } from 'ngx-toast-notifier';
import { ComentarioModel } from 'src/app/shared/models/Comentarios.model';
import { CoreService } from 'src/app/shared/services/core.service';
import { TallerService } from 'src/app/shared/services/taller.service';
import { Subscription } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-detalle-taller',
  templateUrl: './detalle-taller.component.html',
  styleUrls: ['./detalle-taller.component.css']
})
export class DetalleTallerComponent {
  taller: any;
  fromComent!: FormGroup;
  usuarioId:any;
  suscriocion: Subscription | undefined;
  comentarios:ComentarioModel[]=[]

  constructor(private tallerService: TallerService,
    private formulario: FormBuilder,
    private ngxToastService: NgxToastService,
    private _coreservice: CoreService,


  ) { }
  ngOnInit() {
    const observable = this.tallerService.obtenerVariable();
    if (observable) {
      observable.subscribe(taller => {
        this.taller = taller;
      });
    } else {
      console.error('El observable es undefined');
    }
    this.buildFormLogin()
    console.log(this.usuarioId,'jeiek');
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
  this.tallerService.traerComent().subscribe({
    next: (data) => {
      console.log('Datos recibidos del servicio:', data); // Verify the data received from the service

      // Filter talleres based on usuarioId
      this.comentarios = data.filter(comentarios => comentarios.reptor_taller === this.taller.id);

      console.log('Talleres filtrados:', this.comentarios); // Verify the filtered talleres
    },
    error: (err: any) => {
      console.error(err);
    }
  });
}
  private buildFormLogin() {
    this.fromComent = this.formulario.group({
      opinion: ['', Validators.required],
    
    });
  }

  crearComentario(): void {
    const usuarioIdString = localStorage.getItem('usuarioId');
    this.usuarioId = usuarioIdString ? parseInt(usuarioIdString) : null;

    const nuevoRegistro: ComentarioModel = {
      descripcion:this.fromComent.value.opinion,
      puntuacion: '5',
      reptor_taller: this.taller.id ,
      ahutor: this.usuarioId,
    };

    // Agregar el nuevo registro a la matriz de registros
    this.tallerService.crarComent(nuevoRegistro).subscribe({
      next: (response) => {
        console.log('lo que trajo el backend', nuevoRegistro);
      },
      error: (error) => {
        this.ngxToastService.onDanger('ERROR', 'COMPRUEBE LOS DATOS');
      },
      complete: () => {
        console.log('Bienvenido');

        this.ngxToastService.onSuccess('', 'su comentario se guardo');
      }
    });
  }


}
