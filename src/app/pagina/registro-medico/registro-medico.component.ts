import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro-medico',
  templateUrl: './registro-medico.component.html',
  styleUrls: ['./registro-medico.component.css']
})
export class RegistroMedicoComponent {
	formularioRegistroMedico!: FormGroup;
	constructor(private FormBuilder: FormBuilder) {
		this.buildForm();
	}

	ngOnInit(): void {
	}

	private buildForm() {
		this.formularioRegistroMedico = this.FormBuilder.group({
      Nombre: ['', [Validators.required, Validators.maxLength(100)]],
      NumeroIdentificacion: ['', [Validators.required, Validators.max(9999999999)]],
      Telefono : ['', [Validators.required, Validators.max(9999999999)]],
	  Email: ['', [Validators.required, Validators.email]],
	  Contrasena: ['', [Validators.required]],
      Jornada: ['', [Validators.required]],
      Especialidad: ['', [Validators.required]],
		});
	}

	registroMedico(event: Event){
		event.preventDefault();
		if (this.formularioRegistroMedico.valid) {
			const value = this.formularioRegistroMedico.value;
			console.log(value);
		}else{
			this.formularioRegistroMedico.markAllAsTouched();
		}
	}

	get emailRegistroMedico() {
    return this.formularioRegistroMedico.get('Email');
  }

  get contrasenaRegistroMedico() {
    return this.formularioRegistroMedico.get('Contrasena');
  } 

  get nombreRegistroMedico() {
    return this.formularioRegistroMedico.get('Nombre');
  }

  get numeroIdentificacionRegistroMedico() {
    return this.formularioRegistroMedico.get('NumeroIdentificacion');
  }

  get jornadaRegistroMedico() {
    return this.formularioRegistroMedico.get('Jornada');
  } 


  get telefonoRegistroMedico() {
    return this.formularioRegistroMedico.get('Telefono');
  }


  get especialidadRegistroPaciente() {
    return this.formularioRegistroMedico.get('Especialidad');
  }
}
