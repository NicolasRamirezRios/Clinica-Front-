import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-actualizacion-datos',
  templateUrl: './actualizacion-datos.component.html',
  styleUrls: ['./actualizacion-datos.component.css']
})
export class ActualizacionDatosComponent {
  formularioActualizarPaciente!: FormGroup;
	constructor(private FormBuilder: FormBuilder) {
		this.buildForm();
	}

	ngOnInit(): void {
	}

	private buildForm() {
		this.formularioActualizarPaciente = this.FormBuilder.group({
      Telefono : ['', [Validators.required, Validators.max(9999999999)]],
      ciudad : ['', [Validators.required]],
			Email: ['', [Validators.required, Validators.email]],
			Contrasena: ['', [Validators.required]],
      Foto: ['', [Validators.required]],
      Alergias: ['', [Validators.required, Validators.maxLength(100)]],
      Eps: ['', [Validators.required]]
		});
	}

	actualizarPaciente(event: Event){
		event.preventDefault();
		if (this.formularioActualizarPaciente.valid) {
			const value = this.formularioActualizarPaciente.value;
			console.log(value);
		}else{
			this.formularioActualizarPaciente.markAllAsTouched();
		}
	}

	get emailActualizarPaciente() {
    return this.formularioActualizarPaciente.get('Email');
  }

  get contrasenaActualizarPaciente() {
    return this.formularioActualizarPaciente.get('Contrasena');
  } 

  get getCiudadActualizarPaciente() {
    return this.formularioActualizarPaciente.get('Ciudad');
  }

  get telefonoActualizarPaciente() {
    return this.formularioActualizarPaciente.get('Telefono');
  }

  get fotoActualizarPaciente() {
    return this.formularioActualizarPaciente.get('Foto');
  }

  get alergiasActualizarPaciente() {
    return this.formularioActualizarPaciente.get('Alergias');
  }

  get epsActualizarPaciente() {
    return this.formularioActualizarPaciente.get('Eps');
  }


}
