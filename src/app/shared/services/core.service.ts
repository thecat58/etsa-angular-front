import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { AuthModel } from '../models/auth.model';
import { PersonaModel } from '../models/persona.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ActivationCompanyUserModel } from '../models/activation-company-user.model';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { responsei } from '../models/respuiesta.model';
import { __values } from 'tslib';

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

  constructor(
    private httpClient: HttpClient,
    private _router: Router,
    private _tokenService: HttpXsrfTokenExtractor,
    private http: HttpClient
  ) { }

  public pass<T>( tabla: string, dato: string): Observable<T> {
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
    );
  }

  public put<T>(url: String, data: any = {}): Observable<T> {
    if (typeof (data.append) === 'function') {
      data.append('_method', 'PUT');
    } else {
      data._method = 'PUT';
    }
    return this.httpClient.post<T>(API_URL + url, data, this.getConfig());
  }

  public delete(url: String) {
    return this.httpClient.delete(API_URL + url, this.getConfig());
  }

  login(email: string, password: string) {
    const loginData = { email, password };
    this.httpClient.post<responsei>(`${this.API_URL}login/`, loginData).subscribe(
      (datos: responsei) => {
        console.log('token1', datos);
        if (datos) {
          console.log('Hola');
          this._router.navigate(['']);
          // Aquí puedes realizar acciones adicionales si hay datos en la respuesta
        } else {
          console.log('Adiós');
          // Aquí puedes realizar acciones adicionales si no hay datos en la respuesta
        }
      },
      (error) => {
        console.error(error);

        if (error.status === 400) {
          console.log('Error 400 - Solicitud incorrecta');
          // Aquí puedes realizar acciones adicionales específicas para el código de estado 400
        } else {
          console.log('Error general');
          // Otras acciones que desees realizar para otros códigos de estado
        }
      }
    );
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
