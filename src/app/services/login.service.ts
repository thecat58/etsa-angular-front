import { Injectable } from '@angular/core';
import { login } from '../shared/models/auth.model2';
import { CoreService } from '../shared/services/core.service';
import { Observable } from 'rxjs';
import { responsei } from '../shared/models/respuiesta.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 url:string = 'http://localhost:8000/api'
  constructor(private _coreservice: HttpClient,
    private _coreservice2: CoreService) { }

  login(credenciales:login):Observable<responsei>{
    let direccion = this.url+ '/login/'
    return this._coreservice.post<responsei>(direccion,credenciales)
    

  }
  
    
    

  }



