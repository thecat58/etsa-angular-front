import { Component, OnInit, Query } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, pipe } from 'rxjs';
import { TallerService } from 'src/app/shared/services/taller.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showCategories: boolean = false;
  userLoginOn: boolean = true;
  control = new FormControl();
  usuarioId:any
  usuarioVendedor:any
  constructor(
    
    private serviciotaller: TallerService,

  ) {

  }
  ngOnInit(): void {
    this.observarchangesearch()
    const usuarioIdString = localStorage.getItem('usuarioId');
    const usuariovenString = localStorage.getItem('usuariovededor');
    this.usuarioVendedor=usuariovenString;

    this.usuarioId = usuarioIdString;
    console.log('Usuario ID:', usuarioIdString);
    console.log('Usuario Vendedor:', usuariovenString);    
  }


  toggleCategories(): void {
    this.showCategories = !this.showCategories;
  }

  

  loco(): void {
    this.serviciotaller.traerTaller().subscribe((data: any) => {
      console.log('Datos de talleres:', data);
    });
  }

  observarchangesearch() {

    this.control.valueChanges
    .pipe(
      debounceTime(1000)
    )
      .subscribe(query => {
      });
  }
}
