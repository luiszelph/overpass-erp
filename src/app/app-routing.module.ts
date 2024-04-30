import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { IngresosComponent } from "./components/ingresos/ingresos.component";
import { EgresosComponent } from "./components/egresos/egresos.component";

const routes: Routes = [
     { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ,{ path: 'dashboard', component: DashboardComponent}
    ,{ path: 'ingresos', component: IngresosComponent}
    ,{ path: 'egresos', component: EgresosComponent}
]

@NgModule ({
     imports: [RouterModule.forRoot(routes)]
    ,exports: [RouterModule]
})

export class AppRoutingModule {}