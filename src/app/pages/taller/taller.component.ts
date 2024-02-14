import { Component } from '@angular/core';
import { tallerModel } from 'src/app/shared/models/taller.module';
import { TallerService } from 'src/app/shared/services/taller.service';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css']
})
export class TallerComponent {

  talleres: tallerModel[] = [];
  tallerSeleccionado: tallerModel = { foto: '', nombre: '', ubicacion: '', usuriotaller: '' }; // Inicializa tallerSeleccionado con un "taller vacío"

  constructor(private tallerService: TallerService) {}

  ngOnInit(): void {
    this.tallerService.traerTaller().subscribe(data => {
      this.talleres = data;
    });
  }

  seleccionarTaller(id: number): void {
    const tallerEncontrado = this.talleres.find(taller => taller.id === id);
    if (tallerEncontrado) {
      console.log(tallerEncontrado                                   )
      this.tallerSeleccionado = tallerEncontrado;
    } else {
      console.error(`No se encontró ningún taller con ID ${id}`);
    }
  }
}
