import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { identificacionModel } from 'src/app/shared/models/Identifica.model';
import { RejisterService } from 'src/app/shared/services/rejister.service';

@Component({
  selector: 'app-rejistro',
  templateUrl: './rejistro.component.html',
  styleUrls: ['./rejistro.component.css']
})
export class RejistroComponent {
  formLogin!: FormGroup;
  fotoURL: string | ArrayBuffer | null = null;
  file = '';
  identificacion: identificacionModel[]=[];
  identificaciones: identificacionModel[] = [];


  constructor(private formBuilder: FormBuilder,
    private _servicio: RejisterService) {
    this.buildFormLogin();
  }
 
  ngOnInit(): void {
    this.obtenerIdentificaciones();
  }

  private buildFormLogin() {
    this.formLogin = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      // municipio: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      // identificacion: ['', Validators.required],
      apellido: ['', Validators.required],
      foto: ['', Validators.required],

      
    });
  }

  login() {
    if (this.formLogin.valid) {
      console.log('Formulario válido');
      console.log('Datos del formulario:', this.formLogin.value);
      this._servicio.rejsitroUser(this.formLogin.valid).subscribe(
        response=>{
          console.log('lo que trajo el bakent', response);
        },
        error =>{
          console.error('erro de bakent', error);
          
        }
      )
    } else {
      console.log('Formulario inválido');
      // Aquí puedes mostrar mensajes de error o realizar otras acciones si el formulario no es válido
    }
  }

  obtenerIdentificaciones() {
    this._servicio.traerIdentificacion().subscribe(
      (identificaciones) => {
        this.identificaciones = identificaciones;
        console.log(this.identificaciones);
      },
      (error) => {
        console.error('Error al obtener las identificaciones:', error);
      }
    );
  }
  onFotoSeleccionada(event: any) {
    let archivo;
    if (archivo = this.file = event.target.files[0] ) {
      // Leer la imagen como un objeto de tipo Blob
      const reader = new FileReader();
      reader.onload = () => {
        // Asignar la imagen a la variable fotoURL para mostrarla en el formulario
        this.fotoURL = reader.result;
      };
      reader.readAsDataURL(archivo);
    }
  }
  seleccionarFoto() {
    document.getElementById('foto')?.click();
  }
}
