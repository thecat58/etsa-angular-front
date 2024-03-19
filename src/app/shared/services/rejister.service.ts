import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable } from 'rxjs';
import { identificacionModel } from '../models/Identifica.model';
import { municipionModel } from '../models/municipio.model';
import { registroModel } from '../models/registro.model';



@Injectable({
  providedIn: 'root'
})
export class registerService {

  constructor(
    private _coreService: CoreService
  ) { }

  rejsitroUser(registro: registroModel) {
    registro.primer_apellido = registro.primer_apellido.toUpperCase();
    registro.primer_nombre = registro.primer_nombre.toUpperCase();
    registro.password = registro.password;
    registro.email = registro.email;
    registro.password = registro.password;
    registro.is_active = registro.is_active;
    registro.n_identificacion =registro.n_identificacion;

    const formData = new FormData();
    formData.append('primer_nombre', registro.primer_nombre);
    formData.append('primer_apellido', registro.primer_apellido);
    formData.append('n_identificacion', registro.n_identificacion.toString());
    formData.append('email', registro.email);
    formData.append('password', registro.password);
    formData.append('foto', registro.foto);
    formData.append('is_active', registro.is_active.toString());
    formData.append('municipio', registro.municipio.toString());
    formData.append('tipodocumento', registro.tipodocumento.toString())
    return this._coreService.post<registroModel>('usuario/', formData);
  }
  traerIdentificacion(): Observable<identificacionModel[]>{
    return this._coreService.get<identificacionModel[]>('documento/')
  }

  traermunicipio(): Observable<municipionModel[]>{
    return this._coreService.get<municipionModel[]>('municipio/')
  }
  
}
