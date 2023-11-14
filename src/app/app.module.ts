import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginEmpleadoComponent } from './pagina/login-empleado/login-empleado.component';
import { RegistroPacienteComponent } from './pagina/registro-paciente/registro-paciente.component';
import { LoginPacienteComponent } from './pagina/login-paciente/login-paciente.component';
import { RegistroMedicoComponent } from './pagina/registro-medico/registro-medico.component';
import { AgendarCitaComponent } from './pagina/agendar-cita/agendar-cita.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarioComponent } from './calendario/calendario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroPacienteComponent,
    LoginEmpleadoComponent,
    LoginPacienteComponent,
    RegistroMedicoComponent,
    AgendarCitaComponent,
    CalendarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
