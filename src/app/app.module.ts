import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginEmpleadoComponent } from './pagina/login-empleado/login-empleado.component';
import { RegistroPacienteComponent } from './pagina/registro-paciente/registro-paciente.component';
import { LoginPacienteComponent } from './pagina/login-paciente/login-paciente.component';
import { RegistroMedicoComponent } from './pagina/registro-medico/registro-medico.component';
import { AgendarCitaComponent } from './pagina/agendar-cita/agendar-cita.component';
import { InicioPacienteComponent } from './pagina/inicio-paciente/inicio-paciente.component';
import { InicioAdministradorComponent } from './pagina/inicio-administrador/inicio-administrador.component';
import { InicioMedicoComponent } from './pagina/inicio-medico/inicio-medico.component';
import { ActualizacionDatosComponent } from './pagina/actualizacion-datos/actualizacion-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroPacienteComponent,
    LoginEmpleadoComponent,
    LoginPacienteComponent,
    RegistroMedicoComponent,
    AgendarCitaComponent,
    InicioPacienteComponent,
    InicioAdministradorComponent,
    InicioMedicoComponent,
    ActualizacionDatosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
