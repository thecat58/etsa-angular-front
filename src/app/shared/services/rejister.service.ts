import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable } from 'rxjs';
import { identificacionModel } from '../models/Identifica.model';
import { municipionModel } from '../models/municipio.model';



@Injectable({
  providedIn: 'root'
})
export class RejisterService {

  constructor(
    private _cpreservice: CoreService
  ) { }

  rejsitroUser(data:any, documento:File): Observable<any>{
    console.log(data);
    return this._cpreservice.post<any>('usuario/',data )
  }
  traerIdentificacion(): Observable<identificacionModel[]>{
    return this._cpreservice.get<identificacionModel[]>('documento/')
  }

  traermunicipio(): Observable<municipionModel[]>{
    return this._cpreservice.get<municipionModel[]>('municipio/')
  }
  
}
