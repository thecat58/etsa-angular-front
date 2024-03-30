import { Component } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-card-perfil-datos',
  templateUrl: './card-perfil-datos.component.html',
  styleUrls: ['./card-perfil-datos.component.css']
})
export class CardPerfilDatosComponent {
  usuarioGuardado: UserModel | null = null;

  constructor() { }

  ngOnInit(): void {
    const usuarioGuardadoString = localStorage.getItem('usuario');
    if (usuarioGuardadoString !== null) {
      this.usuarioGuardado = JSON.parse(usuarioGuardadoString);
    } else {
      console.log('No se encontraron datos de usuario en el localStorage');
    }
  }
}
