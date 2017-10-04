import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { RegistraProductoComponent } from './registra-producto/registra-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginBarComponent,
    RegistraProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
