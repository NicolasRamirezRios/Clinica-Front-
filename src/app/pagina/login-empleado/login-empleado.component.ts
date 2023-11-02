import { Component } from '@angular/core';

@Component({
  selector: 'app-login-empleado',
  templateUrl: './login-empleado.component.html',
  styleUrls: ['../../app.component.css']
})
export class LoginEmpleadoComponent {

	tipoUsr: string = '';
	setTipoUsuario(tipo: string) {
		this.tipoUsr = tipo;
	}

}
