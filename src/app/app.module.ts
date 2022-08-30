import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarImangenComponent } from './componentes/mostrar-imangen/mostrar-imangen.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarImangenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
