import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginEmpleadoComponent } from './pagina/login-empleado/login-empleado.component';
import { LoginPacienteComponent } from './pagina/login-paciente/login-paciente.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { LoginMedicoComponent } from './pagina/login-medico/login-medico.component';
const routes: Routes = [
{ path: "", component: InicioComponent },
{ path: "loginEmpleado", component: LoginEmpleadoComponent },
{ path: "loginPaciente", component: LoginPacienteComponent },
{ path: "loginMedico", component: LoginMedicoComponent },
{ path: "registro", component: RegistroComponent },
{ path: "**", pathMatch: "full", redirectTo: "" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }