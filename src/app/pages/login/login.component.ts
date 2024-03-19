import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivationCompanyUserModel } from 'src/app/shared/models/activation-company-user.model';
import { CoreService } from 'src/app/shared/services/core.service';



const KEY_CODE_ENTER = 13;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  formLogin!: UntypedFormGroup;


  activationCompanyUsers: ActivationCompanyUserModel[] = [];
  constructor(
    private formBuilder: UntypedFormBuilder,
    private _coreService: CoreService,
    private router: Router,
  ) {
    this._coreService.logout();
    this.buildFormLogin();
  }



  ngOnInit(): void {

  }

  private buildFormLogin() {
    this.formLogin = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  get usuarioField() {
    return this.formLogin.get('usuario');
  }
  get passwordField() {
    return this.formLogin.get('password');
  }

  onEnter(event: any) {
    if (event.keyCode == KEY_CODE_ENTER) {
      this.login();
    }
  }

  selectCompany(idActivationUser: number) {

      

  }

  login() {
    if (this.formLogin.valid) {
      this._coreService.login(
        this.formLogin.get('usuario')!.value,
        this.formLogin.get('password')!.value,);
   
    }
  }
  



  get showListCompanies() {
    return this.activationCompanyUsers.length > 1;
  }

  recoverPassword() {

  }

}


