import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { identificacionModel } from 'src/app/shared/models/Identifica.model';
import { municipionModel } from 'src/app/shared/models/municipio.model';
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
  identificaciones: identificacionModel[] = [];
  municipios: municipionModel[]=[];

  constructor(private formBuilder: FormBuilder, private _servicio: RejisterService) {
    this.buildFormLogin();
  }
 
  ngOnInit(): void {
    this.obtenerIdentificaciones();
    this.obtenerMunicipio();
  }

  private buildFormLogin() {
    this.formLogin = this.formBuilder.group({
      primer_nombre: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      n_identificacion: ['', Validators.required], // Inicializar en null
      primer_apellido: ['', Validators.required],
      foto: ['', Validators.required],
      tipoidentificacion:['', Validators.required],
      municipio: ['', Validators.required],
    })}
    
  login() {
    if (this.formLogin) {
      console.log('Formulario válido');
      console.log('Datos del formulario:', this.formLogin.value);
      this._servicio.rejsitroUser(this.formLogin.value).subscribe({
        next: (response) => {
          console.log('lo que trajo el backend', response);
        },
        error: (error) => {
          console.error('Error del backend', error);
        },
        complete:()=>{
          console.log('Bienvenido');
          
        }
    });
    } else {
      console.log('Formulario inválido');
      // Aquí puedes mostrar mensajes de error o realizar otras acciones si el formulario no es válido
    }
  }

  obtenerIdentificaciones() {
    this._servicio.traerIdentificacion().subscribe(
      (identificaciones) => {
        this.identificaciones = identificaciones;
      },
      (error) => {
        console.error('Error al obtener las identificaciones:', error);
      }
    );
  }

  obtenerMunicipio() {
    this._servicio.traermunicipio().subscribe(
      (municipios) => {
        this.municipios = municipios;
      },
      (error) => {
        console.error('Error al obtener las identificaciones:', error);
      }
    );
  }

  onFotoSeleccionada(event: any) {
    const archivo = this.file = event.target.files[0];
    if (archivo) {
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
