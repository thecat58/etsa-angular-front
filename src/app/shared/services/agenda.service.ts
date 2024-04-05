import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable } from 'rxjs';
import { AgendaModel } from '../models/agenda.model';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(
    private _coreservice: CoreService
  ) { }

getagendas(): Observable<AgendaModel[]> {
  return this._coreservice.get<AgendaModel[]>('citas/');
}
addAgenda(agenda: AgendaModel): Observable<AgendaModel> {
  return this._coreservice.post<AgendaModel>('citas/', agenda);
}

updateAgenda(agenda: AgendaModel): Observable<AgendaModel> {
  return this._coreservice.put<AgendaModel>('citas/' + agenda.id, agenda);
}
}

