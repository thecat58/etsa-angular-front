import { Component } from '@angular/core';
import { OpinionModel } from 'src/app/models/opinion.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  kike(){
    console.log('kkkeke')
  }
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  opiniones:OpinionModel[];

  constructor(){
    this.opiniones = [];
    
  }
  ngOnInit(){
    this.opiniones = [
      {
        id: 1,
        rutaImagen: '/assets/img/imgusuario1.svg',
        nombreAutor: 'Juan',
        opinion: 'excelente servicio'


      },
      {
        id: 3,
        rutaImagen: '/assets/img/imgusuario1.svg',
        nombreAutor: 'Juan',
        opinion: 'excelente servicio'


      },
      {
        id: 2,
        rutaImagen: '/assets/img/imgusuario1.svg',
        nombreAutor: 'Juan',
        opinion: 'excelente servicio'


      }
    ]
    
  }

}
