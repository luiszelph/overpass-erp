import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { IngresosComponent } from "./components/ingresos/ingresos.component";
import { EgresosComponent } from "./components/egresos/egresos.component";
import { ListaIngresosComponent } from "./components/ingresos/lista-ingresos/lista-ingresos.component";
import { NuevoIngresoComponent } from "./components/ingresos/nuevo-ingreso/nuevo-ingreso.component";
import { ListaEgresosComponent } from "./components/egresos/lista-egresos/lista-egresos.component";
import { NuevoEgresosComponent } from "./components/egresos/nuevo-egresos/nuevo-egresos.component";

const routes: Routes = [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
     ,{ path: 'dashboard', component: DashboardComponent}
     ,{ path: 'ingresos', component: IngresosComponent}
     ,{ path: 'lista-ingresos', component: ListaIngresosComponent }
     ,{ path: 'nuevo-ingresos', component: NuevoIngresoComponent }
     ,{ path: 'egresos', component: EgresosComponent}
     ,{ path: 'lista-egresos', component: ListaEgresosComponent }
     ,{ path: 'nuevo-egresos', component: NuevoEgresosComponent }
]

@NgModule ({
     imports: [RouterModule.forRoot(routes)]
    ,exports: [RouterModule]
})

export class AppRoutingModule {}