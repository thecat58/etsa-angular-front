import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable, of } from 'rxjs';
import { tallerModel } from '../models/taller.model';


@Injectable({
  providedIn: 'root'
})
export class TallerService {
  private talleres: tallerModel[] = [];

  constructor(private _cpreservice: CoreService) {
  }

  traerTaller(): Observable<tallerModel[]> {
    return this._cpreservice.get<tallerModel[]>('taller/');
  }

  traerTallerPorId(id: number): Observable<tallerModel[]> {
    return this._cpreservice.get<tallerModel[]>('taller/' + id);
  } 
  crarTaller(taller: tallerModel) {
    taller.nombre = taller.nombre.toUpperCase();
    taller.ubicacion = taller.ubicacion.toUpperCase();
    taller.descripcion = taller.descripcion;
    taller.usuriotaller = taller.usuriotaller;
    taller.foto = taller.foto;
    return this._cpreservice.post<tallerModel>('taller/', taller);
  }

  updateTaller(index: number, updatedTaller: tallerModel): void {

  }

  deleteTaller(index: number): void {

  }

}


