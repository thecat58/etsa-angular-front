import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'etsa-front';

  constructor(){

  }
  ya() {
    alert('estaremso en contacto')
  }
}

