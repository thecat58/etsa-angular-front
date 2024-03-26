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
    taller.nombre = taller.nombre;
    taller.ubicacion = taller.ubicacion;
    taller.descripcion = taller.descripcion;
    taller.usuriotaller = taller.usuriotaller;
    taller.foto = taller.foto;
    const formData = new FormData();
    formData.append('nombre', taller.nombre);
    formData.append('descripcion', taller.descripcion);
    formData.append('ubicacion', taller.ubicacion);
    formData.append('usuriotaller', taller.usuriotaller);
    formData.append('foto', taller.foto);

    return this._cpreservice.post<tallerModel>('taller/', formData);
  }

  actualizarTaller(updatedTaller: tallerModel) {
return updatedTaller
  }

  deleteTaller(id:number){
    const url:string=`taller/${id}`;
    return this._cpreservice.delete(url);
  }

}


