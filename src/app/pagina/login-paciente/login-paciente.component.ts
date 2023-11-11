import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-paciente',
  templateUrl: './login-paciente.component.html',
  styleUrls: ['./login-paciente.component.css']
})
export class LoginPacienteComponent {
	formularioPaciente!: FormGroup;

	constructor(private FormBuilder: FormBuilder) {
		this.buildForm();
	}

	ngOnInit(): void {
	}

	private buildForm() {
		this.formularioPaciente = this.FormBuilder.group({
			Cedula: ['', [Validators.required, Validators.max(9999999999)]],
			Contrasena: ['', [Validators.required]],
		});
  }

	loginPaciente(event: Event){
		event.preventDefault();
		if (this.formularioPaciente.valid) {
			const value = this.formularioPaciente.value;
			console.log(value);
		}else{
			this.formularioPaciente.markAllAsTouched();
		}
	}

	
	get cedulaPaciente() {
		return this.formularioPaciente.get('Cedula');
	}

	get contrasenaPaciente() {
		return this.formularioPaciente.get('Contrasena');
	}
}

