import { Component,Input } from '@angular/core';
import { OpinionModel } from 'src/app/models/opinion.models';

@Component({
  selector: 'app-card-persona',
  templateUrl: './card-persona.component.html',
  styleUrls: ['./card-persona.component.css']
})
export class CardPersonaComponent {
  @Input() opinion:OpinionModel;

  constructor(){
    this.opinion = {} as OpinionModel;
  }
}
