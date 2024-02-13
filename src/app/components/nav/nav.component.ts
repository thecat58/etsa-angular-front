import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userLoginOn:boolean=true;
  constructor(    private _log: LoginService,){

  }
  ngOnInit(): void {
      
  }



}
