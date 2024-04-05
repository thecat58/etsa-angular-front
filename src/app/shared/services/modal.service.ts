import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public openModal(): void {
    this.isOpenSubject.next(true);
  }

  public closeModal(): void {
    this.isOpenSubject.next(false);
  }

  public getModalState(): Observable<boolean> {
    return this.isOpenSubject.asObservable();
  }
}
