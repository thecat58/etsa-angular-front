<<<<<<< HEAD
import { Component } from '@angular/core';
=======
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LoginService } from 'src/app/services/login.service';
// import { login } from 'src/app/shared/models/auth.model';
// import { NotificationService } from 'src/app/shared/services/notification-service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
  
//   loginForm: FormGroup;

//   constructor(
//     private _uiNotificationService: NotificationService,
//     private formBuilder: FormBuilder,
//     private _log: LoginService,
//     private router: Router
//   ) {
//     this.loginForm = this.formBuilder.group({
//       email: ['kike@gmil.com', [Validators.required, Validators.email]],
//       password: ['', Validators.required],
//     });
//   }

//   ngOnInit(): void {
//   }

//   get email() {
//     return this.loginForm.get('email');
//   }

//   get password() {
//     return this.loginForm.get('password');
//   }

//   onSubmit() {
//     if (this.loginForm && this.loginForm.valid) {
//       const formData: login = this.loginForm.value;
//       this._log.login(formData).subscribe(data => {
//         console.log(data);
//       });
//     } else {
//       // Handle form validation errors or form not initialized
//     }
//   }

// }
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivationCompanyUserModel } from 'src/app/shared/models/activation-company-user.model';
import { CoreService } from 'src/app/shared/services/core.service';
import { NotificationService } from 'src/app/shared/services/notification-service';
import { NotificationOptions } from 'src/app/shared/models/notification-options.model';


const KEY_CODE_ENTER = 13;

>>>>>>> 47dc0428bde53dbb6757663dc5e60274cfe5ed2b

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD
export class LoginComponent {
  usernameOrEmail: string = '';
  password: string = '';

  onSubmit() {
    // Aquí puedes manejar la lógica de inicio de sesión, por ejemplo, enviar los datos a un servicio de autenticación.
    console.log('Usuario/Correo Electrónico:', this.usernameOrEmail);
    console.log('Contraseña:', this.password);
  }
}

=======


export class LoginComponent implements OnInit {
  formLogin!: UntypedFormGroup;


  activationCompanyUsers: ActivationCompanyUserModel[] = [];
  options: NotificationOptions = { message: "Usuario o contraseña inválidos" };
  options1: NotificationOptions = { message: "Inicio de sesión correcto",type: "success"};
  constructor(
    private formBuilder: UntypedFormBuilder,
    private _coreService: CoreService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this._coreService.logout();
    this.buildFormLogin();
  }

  showNotification():void{
    this.notificationService.showNotification({message:"Contacte con un administrador.", type : "warning",position:["right", "top"]})
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


>>>>>>> 47dc0428bde53dbb6757663dc5e60274cfe5ed2b
