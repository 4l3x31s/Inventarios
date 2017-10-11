import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar.component';
import {LoginBarComponent} from './login-bar/login-bar.component';
import {RegistraProductoComponent} from './registra-producto/registra-producto.component';
import {FormsModule} from "@angular/forms";
import {PedidosComponent} from './pedidos/pedidos.component';
import {EntregasComponent} from './entregas/entregas.component';
import {VentasComponent} from './ventas/ventas.component';
import {EstadoCuentasComponent} from './estado-cuentas/estado-cuentas.component';
import {ReportesComponent} from './reportes/reportes.component';
import {DiscosComponent} from './discos/discos.component';
import {CierreGestionComponent} from './cierre-gestion/cierre-gestion.component';
import {RouterModule, Routes} from "@angular/router";
import {ServicioSicService} from "./services/servicio-sic.service";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from '@angular/common/http';
import {SicService} from "./services/sic.service";

const appRoutes: Routes = [
  {path: 'nuevo-producto', component: RegistraProductoComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'entregas', component: EntregasComponent},
  {path: 'estado-cuentas', component: EstadoCuentasComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'discos', component: DiscosComponent},
  {path: 'cierre-gestion', component: CierreGestionComponent}
]

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
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule
  ],
  providers: [ServicioSicService,
    SicService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
