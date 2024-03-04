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
  talleresMostrados: tallerModel[] = []; // Tener una lista separada para los talleres mostrados
  tallerSeleccionado: tallerModel = { foto: '', nombre: '', ubicacion: '', usuriotaller: '' }; // Inicializa tallerSeleccionado con un "taller vacío"
  cantidadMostrar: number = 3; // Cantidad de talleres para mostrar inicialmente

  constructor(private tallerService: TallerService) {}

  ngOnInit(): void {
    this.tallerService.traerTaller().subscribe(data => {
      this.talleres = data;
      this.mostrarTalleres();
    });
  }

  mostrarTalleres(): void {
    this.talleresMostrados = this.talleres.slice(0, this.cantidadMostrar);
  }

  verMas(): void {
    this.cantidadMostrar += 3; // Aumenta la cantidad de talleres para mostrar
    this.mostrarTalleres(); // Vuelve a mostrar los talleres con la nueva cantidad
  }

  seleccionarTaller(id: number): void {
    const tallerEncontrado = this.talleres.find(taller => taller.id === id);
    if (tallerEncontrado) {
      this.tallerSeleccionado = tallerEncontrado;
    } else {
      console.error(`No se encontró ningún taller con ID ${id}`);
    }
  }
}
