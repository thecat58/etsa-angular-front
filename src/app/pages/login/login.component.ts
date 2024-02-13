import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameOrEmail: string = '';
  password: string = '';

  onSubmit() {
    // Aquí puedes manejar la lógica de inicio de sesión, por ejemplo, enviar los datos a un servicio de autenticación.
    console.log('Usuario/Correo Electrónico:', this.usernameOrEmail);
    console.log('Contraseña:', this.password);
  }
}

