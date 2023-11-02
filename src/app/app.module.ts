import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginEmpleadoComponent } from './pagina/login-empleado/login-empleado.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { LoginPacienteComponent } from './pagina/login-paciente/login-paciente.component';
import { LoginAdministradorComponent } from './pagina/login-administrador/login-administrador.component';
import { LoginMedicoComponent } from './pagina/login-medico/login-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    LoginEmpleadoComponent,
    LoginMedicoComponent,
    LoginPacienteComponent,
    LoginAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
