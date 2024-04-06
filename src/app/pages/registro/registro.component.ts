import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxToastService } from 'ngx-toast-notifier';
import { identificacionModel } from 'src/app/shared/models/Identifica.model';
import { municipionModel } from 'src/app/shared/models/municipio.model';
import { registroModel } from 'src/app/shared/models/registro.model';
import { registerService } from 'src/app/shared/services/rejister.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class registroComponent {
  formLogin!: FormGroup;
  fotoURL: string | ArrayBuffer | null = null;
  file = File;
  identificaciones: identificacionModel[] = [];
  municipios: municipionModel[] = [];
  registro: registroModel[] = [];



  constructor(
    private formBuilder: FormBuilder,
    private _servicio: registerService,
    private _router: Router,
    private ngxToastService: NgxToastService,


  ) {
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
      tipodocumento: ['', Validators.required],
      municipio: ['', Validators.required],
      vededor: [false, Validators.required],

    })
  }

  submitForm(event: any) {
    this.file = event.target.foto.files[0];
console.log(this.formLogin.value.vededor,'vendedor')
    if (this.formLogin.valid && this.file instanceof File) {
      // Crear una instancia del modelo registro y llenarla con los datos del formulario
      const nuevoRegistro: registroModel = {
        vededor:this.formLogin.value.vededor,
        is_active: true,
        primer_nombre: this.formLogin.value.primer_nombre,
        password: this.formLogin.value.password,
        email: this.formLogin.value.email,
        n_identificacion: this.formLogin.value.n_identificacion,
        primer_apellido: this.formLogin.value.primer_apellido,
        foto: this.file, // Asignar el archivo directamente al atributo 'foto'
        tipodocumento: this.formLogin.value.tipodocumento,
        municipio: this.formLogin.value.municipio,
      };

      // Agregar el nuevo registro a la matriz de registros
      this._servicio.rejsitroUser(nuevoRegistro).subscribe({
        next: (response) => {
          console.log('lo que trajo el backend', response);
        },
        error: (error) => {
          this.ngxToastService.onDanger('ERROR', 'COMPRUEBE LOS DATOS');
        },
        complete: () => {
          console.log('Bienvenido');

          this.ngxToastService.onSuccess('', 'puedes iniciar');

          this._router.navigate(['login']);
        }
      });

      // Ahora puedes hacer lo que quieras con la matriz de registros, como enviarla a un servicio
      console.log('Registro del modelo:', nuevoRegistro);

    } else {
      if (!this.file) {
        this.ngxToastService.onDanger('ERROR', 'COMPRUEBE LOS DATOS');
      } else {
        console.log('Formulario inválido');
      }
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
    const archivo = event.target.files[0];
    if (archivo) {
      // Asignar el archivo seleccionado a this.file
      this.file = archivo;

      // Leer la imagen como un objeto de tipo Blob
      const reader = new FileReader();
      reader.onload = () => {
        // Asignar la imagen a la variable fotoURL para mostrarla en el formulario
        this.fotoURL = reader.result as string;
      };
      reader.readAsDataURL(archivo);
    }
  }


  seleccionarFoto() {
    document.getElementById('foto')?.click();
  }
}
