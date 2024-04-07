import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tallerModel } from 'src/app/shared/models/taller.model';
import { TallerService } from 'src/app/shared/services/taller.service';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css']
})
export class TallerComponent {

  talleres: tallerModel[] = [];
  talleresMostrados: tallerModel[] = []; // Tener una lista separada para los talleres mostrados
  tallerSeleccionado: tallerModel = { foto:  new File([],''), nombre: '', ubicacion: '', usuriotaller: '', descripcion:'' }; // Inicializa tallerSeleccionado con un "taller vacío"
  cantidadMostrar: number = 100; // Cantidad de talleres para mostrar inicialmente

  constructor(private tallerService: TallerService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tallerService.traerTaller().subscribe({
      next: (data) => {
        console.log('Datos recibidos del servicio:', data); // Verifica los datos recibidos del servicio
        this.talleres = data;
        this.mostrarTalleres();
      },
      error: (err: any) => {
        console.error(err);
        
      } 
    })
  }

  mostrarTalleres(): void {
    this.talleresMostrados = this.talleres.slice(0, this.cantidadMostrar);
    console.log(this.talleresMostrados,);
  }

 
  seleccionarTaller(taller: tallerModel): void {
    this.tallerSeleccionado = taller;
    this.tallerService.enviarVariable(taller); // Este método debería estar definido en el servicio TallerService

    this.router.navigate(['detalle-taller']);
    console.log(this.tallerSeleccionado, 'taller mostrado');
  }
  
  

}
