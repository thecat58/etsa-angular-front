import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tallerModel } from '../models/taller.model';
import { ComentarioModel } from '../models/Comentarios.model';


@Injectable({
  providedIn: 'root'
})
export class TallerService {
  private talleres: tallerModel[] = [];
  private variableCompartidaSubject: BehaviorSubject<tallerModel | null> = new BehaviorSubject<tallerModel | null>(null);
  constructor(private _cpreservice: CoreService) {
  }

  traerTaller(): Observable<tallerModel[]> {
    return this._cpreservice.get<tallerModel[]>('taller/');
  }

  enviarVariable(taller: tallerModel) {
    this.variableCompartidaSubject.next(taller);
  }

  obtenerVariable(): Observable<tallerModel | null> {
    return this.variableCompartidaSubject.asObservable();
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

    return this._cpreservice.post<tallerModel>('taller/',formData);
  }
  traerComent(): Observable<ComentarioModel[]> {
    return this._cpreservice.get<ComentarioModel[]>('Comentarios/');
  }
  crarComent(comet: ComentarioModel) {
    comet.descripcion = comet.descripcion;
    comet.puntuacion = comet.puntuacion;
    comet.reptor_taller = comet.reptor_taller;
    comet.ahutor = comet.ahutor;


    return this._cpreservice.post<ComentarioModel>('Comentarios/',comet);
  }

  actualizarTaller(taller: tallerModel) {
    console.log('kike servicio')
    const formData = new FormData();
    formData.append('nombre', taller.nombre);
    formData.append('descripcion', taller.descripcion);
    formData.append('ubicacion', taller.ubicacion);
    formData.append('usuriotaller', taller.usuriotaller);
    formData.append('foto', taller.foto);

    if (taller.foto && taller.foto instanceof File) {
      formData.append('file', taller.foto);
    }
    const url: string = `taller/${taller.id}/`;

    return this._cpreservice.put<tallerModel>(url,formData);
  }

  deleteTaller(id: number) {
    const url: string = `taller/${id}/`;
    return this._cpreservice.delete(url);
  }

}


