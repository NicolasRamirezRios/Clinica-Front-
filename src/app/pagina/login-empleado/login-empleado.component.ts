import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-empleado',
  templateUrl: './login-empleado.component.html',
  styleUrls: ['./login-empleado.component.css']
})
export class LoginEmpleadoComponent implements OnInit{

	formularioAdmin!: FormGroup;
	formularioMedico!: FormGroup;
	constructor(private FormBuilder: FormBuilder) {
		this.buildForm();
	}

	ngOnInit(): void {
	}

	private buildForm() {
		this.formularioAdmin = this.FormBuilder.group({
			Email: ['', [Validators.required, Validators.email]],
			Contrasena: ['', [Validators.required]],
		});

		this.formularioMedico = this.FormBuilder.group({
			cedula: ['', [Validators.required, Validators.max(9999999999)]],
			Contrasena: ['', [Validators.required]],
		});
	}

	loginAdmin(event: Event){
		event.preventDefault();
		if (this.formularioAdmin.valid) {
			const value = this.formularioAdmin.value;
			console.log(value);
		}else{
			this.formularioAdmin.markAllAsTouched();
		}
	}

	loginMedico(event: Event){
		event.preventDefault();
		if (this.formularioMedico.valid) {
			const value = this.formularioMedico.value;
			console.log(value);
		}else{
			this.formularioMedico.markAllAsTouched();
		}
	}
	
	get emailAdmin() {
		return this.formularioAdmin.get('Email');
	}

	get contrasenaAdmin() {
		return this.formularioAdmin.get('Contrasena');
	}

	get cedulaMedico() {
		return this.formularioMedico.get('cedula');
	}

	get contrasenaMedico() {
		return this.formularioMedico.get('Contrasena');
	}

	tipoUsr: string = '';
	setTipoUsuario(tipo: string) {
		this.tipoUsr = tipo;
	}
}
