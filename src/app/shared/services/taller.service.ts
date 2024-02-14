import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable } from 'rxjs';
import { tallerModel } from '../models/taller.module';

@Injectable({
  providedIn: 'root'
})
export class TallerService {
  tallerSubject: any;

  constructor(
    private _cpreservice: CoreService
  ) { }

  traerTaller(): Observable<tallerModel[]>{
    return this._cpreservice.get<tallerModel[]>('taller/')
  }
  traerTallerPorId(id:number): Observable<tallerModel[]>{
    return this._cpreservice.get<tallerModel[]>('taller/'+id)
  }

  
}
