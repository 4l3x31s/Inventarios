import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { RegistraProductoComponent } from './registra-producto/registra-producto.component';
import {FormsModule} from "@angular/forms";
import { PedidosComponent } from './pedidos/pedidos.component';
import { EntregasComponent } from './entregas/entregas.component';
import { VentasComponent } from './ventas/ventas.component';
import { EstadoCuentasComponent } from './estado-cuentas/estado-cuentas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { DiscosComponent } from './discos/discos.component';
import { CierreGestionComponent } from './cierre-gestion/cierre-gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginBarComponent,
    RegistraProductoComponent,
    PedidosComponent,
    EntregasComponent,
    VentasComponent,
    EstadoCuentasComponent,
    ReportesComponent,
    DiscosComponent,
    CierreGestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
