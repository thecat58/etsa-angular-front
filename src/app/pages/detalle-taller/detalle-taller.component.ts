import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-detalle-taller',
  templateUrl: './detalle-taller.component.html',
  styleUrls: ['./detalle-taller.component.css']
})
export class DetalleTallerComponent implements OnInit {
  ngOnInit() {
//     $(document).ready(function() {
//       $(".next-button").click(function() {
//         var container = $(".categorias-container");
//         var scrollPosition = container.scrollLeft();
//         var cardWidth = $(".categoria-taller").outerWidth(true); // Ancho de una tarjeta incluyendo márgenes
//         var containerWidth = container.width();
//         var scrollTo = scrollPosition + containerWidth; // Mover al ancho del contenedor
//         container.animate({ scrollLeft: scrollTo }, "slow");
//       });
    
//       $(".prev-button").click(function() {
//         var container = $(".categorias-container");
//         var scrollPosition = container.scrollLeft();
//         var cardWidth = $(".categoria-taller").outerWidth(true); // Ancho de una tarjeta incluyendo márgenes
//         var containerWidth = container.width();
//         var scrollTo = scrollPosition - containerWidth; // Mover al ancho del contenedor hacia atrás
//         container.animate({ scrollLeft: scrollTo }, "slow");
//       });
//     });
 }  }
