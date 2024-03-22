import { Component } from '@angular/core';
import { NgxToastService } from 'ngx-toast-notifier';
import { CoreService } from 'src/app/shared/services/core.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {


usuarioId: number = 0;

constructor(
  private ngxToastService: NgxToastService,
  ) { }

ngOnInit(): void {

  this.ngxToastService.onSuccess('Inicio exitoso', '')
  
}
}