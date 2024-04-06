import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { AuthModel } from '../models/auth.model';
import { PersonaModel } from '../models/persona.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivationCompanyUserModel } from '../models/activation-company-user.model';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { responsei } from '../models/respuiesta.model';
import { __values } from 'tslib';
import { NgxToastService } from 'ngx-toast-notifier';
import { TallerService } from './taller.service';
import { tallerModel } from '../models/taller.model';

const API_URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private API_URL = environment.url;


  getApiUrl(): string {
    // Utiliza la propiedad 'url' del objeto 'environment' para obtener la URL base de la API
    return environment.url;
  }

  public persona: Subject<PersonaModel> = new Subject<PersonaModel>;
  public permissions: Subject<string> = new Subject<string>;
  public check: Subject<boolean> = new Subject<boolean>;
  public Data = new Subject;
  Data$ = this.Data.asObservable();
  check$ = this.check.asObservable();
  usuariomodel: PersonaModel[] = [];
  usuarioId: number = 0
  private _refresh$ = new Subject<void>();
  constructor(
    private httpClient: HttpClient,
    private _router: Router,
    private _tokenService: HttpXsrfTokenExtractor,
    private http: HttpClient,
    private ngxToastService: NgxToastService,


  ) { }
  get refresh$() {
    return this._refresh$;
  }

  public pass<T>(tabla: string, dato: string): Observable<T> {
    if (dato == '') {
      return this.http.get<T>(`${API_URL}${tabla}`);
    }
    else {
      return this.http.get<T>(`${API_URL}search/${tabla}/${dato}`);
    }
  }


  public get<T>(url: String, data: string | Object = ''): Observable<T> {
    return this.httpClient.get<T>(
      API_URL + url + this.getData(data),
      this.getConfig()
    );
  }

  private getConfig() {
    const header = {
      'Accept': 'application/json'
    };
    const token = this._tokenService.getToken();
    return { withCredentials: true, headers: new HttpHeaders(header) };
  }


  public post<T>(url: String, data: Object | FormData = {}): Observable<T> {
    return this.httpClient.post<T>(
      API_URL + url,
      data,
      this.getConfig()

    ).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  public put<T>(url: String, data: any = {}): Observable<T> {
    if (typeof (data.append) === 'function') {
      data.append('_method', 'PUT');
    } else {
      data._method = 'PUT';
    }
    return this.httpClient.put<T>(API_URL + url, data, this.getConfig());
  }

  public delete(url: String) {
    return this.httpClient.delete(API_URL + url, this.getConfig()).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  login(email: string, password: string) {
    console.log('kike');
    const loginData = { email, password };
    this.httpClient.post<any>(`${this.API_URL}login/`, loginData).subscribe(
      (datos: any) => {
        console.log('token1', datos);
        this.usuarioId = datos.user.id;
        if (datos && datos.token) {
          
  
          // Guardar otros datos del usuario en el localStorage
          localStorage.setItem('usuario', JSON.stringify(datos.user));
          localStorage.setItem('usuarioId', datos.user.id);
          localStorage.setItem('usuariofoto', datos.user.foto);
          localStorage.setItem('usuariovededor', datos.user.vededor);


  
          if (datos.user.vededor) {
            this._router.navigate(['perfil-venta']);
          } else {
            this._router.navigate(['perfil-usuario']);
          }
          // Mostrar mensaje de éxito solo si el estado de respuesta es 200
          if (datos.status === 200) {
            this.ngxToastService.onSuccess('Inicio exitoso', '');
          }
        }
      },
      (error) => {
        console.error(error);
  
        if (error.status === 400) {
          this.ngxToastService.onDanger('ERROR', 'COMPRUEBE LOS DATOS O REGÍSTRESE');
        } else {
          this.ngxToastService.onDanger('ERROR', 'OCURRIÓ UN ERROR. POR FAVOR, INTÉNTELO DE NUEVO');
        }
      }
    );
  }
  

  getUsuarioId(): number {
    return this.usuarioId;
  }


  public getUserAuthenticated() {
    this.get<AuthModel>('user').subscribe(auth => {
      this.persona.next(auth.user);
      this.permissions.next(auth.permission);
      this.check.next(true)
    }, errs => {
      this.logout();
      this.check.next(false)
    });
  }

  public authentication(): Promise<string> {
    return new Promise((resolve) => {
      this.get<AuthModel>('user').subscribe(auth => {
        resolve(auth.permission);
      });
    });
  }

  logout() {
    // Borrar token y usuarioId del localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioId');

    this.persona.next(null!);
    this.permissions.next('');

    this.post('logout').subscribe(res => {
      this._router.navigate(['/login']);
    }, err => {
      this._router.navigate(['/login']);
    });
  }



  private getData(data: String | Object): String {
    let dataUrl = '?';
    if (typeof (data) === 'string') {
      if (data.trim() === '') {
        return '';
      }
      dataUrl += data;
    } else {
      const keys = Object.keys(data);
      keys.forEach((key, index) => {
        if (index > 0) {
          dataUrl += '&';
        }
        dataUrl += '${key}=${data[key]}';
      });
    }
    return dataUrl.replace('??', '?').trim();
  }
}
