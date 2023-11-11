import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginEmpleadoComponent } from './pagina/login-empleado/login-empleado.component';
import { RegistroPacienteComponent } from './pagina/registro-paciente/registro-paciente.component';
import { LoginPacienteComponent } from './pagina/login-paciente/login-paciente.component';
import { RegistroMedicoComponent } from './pagina/registro-medico/registro-medico.component';
import { AgendarCitaComponent } from './pagina/agendar-cita/agendar-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroPacienteComponent,
    LoginEmpleadoComponent,
    LoginPacienteComponent,
    RegistroMedicoComponent,
    AgendarCitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
