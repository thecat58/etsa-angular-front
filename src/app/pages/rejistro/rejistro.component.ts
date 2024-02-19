import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rejistro',
  templateUrl: './rejistro.component.html',
  styleUrls: ['./rejistro.component.css']
})
export class RejistroComponent {
  formLogin!: FormGroup;
  fotoURL: string | ArrayBuffer | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.buildFormLogin();
  }

  private buildFormLogin() {
    this.formLogin = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      municipio: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      identificacion: ['', Validators.required],
      apellido: ['', Validators.required]
    });
  }

  login() {
    if (this.formLogin.valid) {
      console.log('Formulario válido');
      console.log('Datos del formulario:', this.formLogin.value);
      // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones
    } else {
      console.log('Formulario inválido');
      // Aquí puedes mostrar mensajes de error o realizar otras acciones si el formulario no es válido
    }
  }
  onFotoSeleccionada(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Leer la imagen como un objeto de tipo Blob
      const reader = new FileReader();
      reader.onload = () => {
        // Asignar la imagen a la variable fotoURL para mostrarla en el formulario
        this.fotoURL = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
seleccionarFoto() {
  document.getElementById('foto')?.click();
}
}
