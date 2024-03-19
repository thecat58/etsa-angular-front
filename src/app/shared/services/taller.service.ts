import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable } from 'rxjs';
import { tallerModel } from '../models/taller.module';


@Injectable({
  providedIn: 'root'
})
export class TallerService {
  private talleres: tallerModel[] = [];
  private talleresObservable: Observable<tallerModel[]>;

  constructor(private _cpreservice: CoreService) {
    this.talleresObservable = new Observable(observer => {
      observer.next([...this.talleres]);
    });
  }

  getTalleres(): Observable<tallerModel[]> {
    return this.talleresObservable;
  }

  private emitTalleres(): void {
    this.talleresObservable = new Observable(observer => {
      observer.next([...this.talleres]);
    });
  }

  addTaller(taller: tallerModel): void {
    this.talleres.push(taller);
    this.emitTalleres();
  }

  updateTaller(index: number, updatedTaller: tallerModel): void {
    if (index < 0 || index >= this.talleres.length) return;
    this.talleres[index] = updatedTaller;
    this.emitTalleres();
  }

  deleteTaller(index: number): void {
    if (index < 0 || index >= this.talleres.length) return;
    this.talleres.splice(index, 1);
    this.emitTalleres();
  }

  traerTaller(): Observable<tallerModel[]> {
    return this._cpreservice.get<tallerModel[]>('taller/');
  }

  traerTallerPorId(id: number): Observable<tallerModel[]> {
    return this._cpreservice.get<tallerModel[]>('taller/' + id);
  }
}
