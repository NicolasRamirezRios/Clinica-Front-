import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registroPaciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.css']
})
export class RegistroPacienteComponent {
  formularioRegistroPaciente!: FormGroup;
	constructor(private FormBuilder: FormBuilder) {
		this.buildForm();
	}

	ngOnInit(): void {
	}

	private buildForm() {
		this.formularioRegistroPaciente = this.FormBuilder.group({
      Nombre: ['', [Validators.required, Validators.maxLength(100)]],
      NumeroIdentificacion: ['', [Validators.required, Validators.max(9999999999)]],
      Telefono : ['', [Validators.required, Validators.max(9999999999)]],
      ciudad : ['', [Validators.required]],
			Email: ['', [Validators.required, Validators.email]],
			Contrasena: ['', [Validators.required]],
      FechaNacimiento: ['', [Validators.required]],
      Foto: ['', [Validators.required]],
      Alergias: ['', [Validators.required, Validators.maxLength(100)]],
      Eps: ['', [Validators.required]],
      TipoSangre: ['', [Validators.required]],
		});
	}

	registroPaciente(event: Event){
		event.preventDefault();
		if (this.formularioRegistroPaciente.valid) {
			const value = this.formularioRegistroPaciente.value;
			console.log(value);
		}else{
			this.formularioRegistroPaciente.markAllAsTouched();
		}
	}

	get emailRegistroPaciente() {
    return this.formularioRegistroPaciente.get('Email');
  }

  get contrasenaRegistroPaciente() {
    return this.formularioRegistroPaciente.get('Contrasena');
  } 

  get nombreRegistroPaciente() {
    return this.formularioRegistroPaciente.get('Nombre');
  }

  get numeroIdentificacionRegistroPaciente() {
    return this.formularioRegistroPaciente.get('NumeroIdentificacion');
  }

  get fechaNacimientoRegistroPaciente() {
    return this.formularioRegistroPaciente.get('FechaNacimiento');
  } 

  get getCiudadRegistroPaciente() {
    return this.formularioRegistroPaciente.get('Ciudad');
  }

  get telefonoRegistroPaciente() {
    return this.formularioRegistroPaciente.get('Telefono');
  }

  get fotoRegistroPaciente() {
    return this.formularioRegistroPaciente.get('Foto');
  }

  get alergiasRegistroPaciente() {
    return this.formularioRegistroPaciente.get('Alergias');
  }

  get epsRegistroPaciente() {
    return this.formularioRegistroPaciente.get('Eps');
  }

  get tipoSangreRegistroPaciente() {
    return this.formularioRegistroPaciente.get('TipoSangre');
  }
}


