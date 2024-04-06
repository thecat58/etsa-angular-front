import { Component } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';
import { CoreService } from 'src/app/shared/services/core.service';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css']
})
export class CardPerfilComponent {
  usuarioGuardado: UserModel | null = null;
   API_URL = environment.http;

  constructor(
    private _CoreService: CoreService

  ) { }

  ngOnInit(): void {
    const usuarioGuardadoString = localStorage.getItem('usuario');
    const usuariofoto = localStorage.getItem('usuariofoto');

    if (usuarioGuardadoString !== null) {
      this.usuarioGuardado = JSON.parse(usuarioGuardadoString);
      console.log(usuariofoto,'kike foto ');
      
    } else {
      console.log('No se encontraron datos de usuario en el localStorage');
    }
  }

  cerrarcesion(){
    this._CoreService.logout();
  console.log('se serro secion');
  }
}
