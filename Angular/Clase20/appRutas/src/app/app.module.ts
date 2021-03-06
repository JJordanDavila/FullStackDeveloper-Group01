import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { ServidorComponent } from './listado/servidor/servidor.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EditarComponent } from './editar/editar.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AppRouting } from './app-routing.module';
import { ServidoresService } from './servidores.service';
import { ReducidoPipe } from './reducido.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoComponent,
    ServidorComponent,
    DetalleComponent,
    EditarComponent,
    CabeceraComponent,
    ReducidoPipe
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [ServidoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
