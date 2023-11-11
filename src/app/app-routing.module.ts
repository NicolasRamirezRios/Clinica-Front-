import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginEmpleadoComponent } from './pagina/login-empleado/login-empleado.component';
import { LoginPacienteComponent } from './pagina/login-paciente/login-paciente.component';
import { RegistroPacienteComponent } from './pagina/registro-paciente/registro-paciente.component';
import { RegistroMedicoComponent } from './pagina/registro-medico/registro-medico.component';
import { AgendarCitaComponent } from './pagina/agendar-cita/agendar-cita.component';

const routes: Routes = [
{ path: "", component: InicioComponent },
{ path: "loginEmpleado", component: LoginEmpleadoComponent },
{ path: "loginPaciente", component: LoginPacienteComponent },
{ path: "registroPaciente", component: RegistroPacienteComponent },
{ path: "registroMedico", component: RegistroMedicoComponent },
{ path: "agendarCita", component: AgendarCitaComponent },
{ path: "**", pathMatch: "full", redirectTo: "" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }