import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { EgresosComponent } from './components/egresos/egresos.component';
import { ListaIngresosComponent } from './components/ingresos/lista-ingresos/lista-ingresos.component';
import { NuevoIngresoComponent } from './components/ingresos/nuevo-ingreso/nuevo-ingreso.component';
import { ListaEgresosComponent } from './components/egresos/lista-egresos/lista-egresos.component';
import { NuevoEgresosComponent } from './components/egresos/nuevo-egresos/nuevo-egresos.component';

@NgModule({
  declarations: [
     AppComponent
    ,SidenavComponent
    ,BodyComponent
    ,DashboardComponent
    ,IngresosComponent
    ,EgresosComponent, ListaIngresosComponent, NuevoIngresoComponent, ListaEgresosComponent, NuevoEgresosComponent
  ]
  ,imports: [
     BrowserModule
    ,BrowserAnimationsModule
    ,AppRoutingModule
  ]
  ,providers: []
  ,bootstrap: [AppComponent]
})
export class AppModule { }
