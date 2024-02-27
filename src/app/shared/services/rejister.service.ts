import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable } from 'rxjs';
import { identificacionModel } from '../models/Identifica.model';



@Injectable({
  providedIn: 'root'
})
export class RejisterService {

  constructor(
    private _cpreservice: CoreService
  ) { }

  rejsitroUser(data:any): Observable<any>{
    return this._cpreservice.post<any>('usuario/')
  }
  traerIdentificacion(): Observable<identificacionModel[]>{
    return this._cpreservice.get<identificacionModel[]>('documento/')
  }
  
}
