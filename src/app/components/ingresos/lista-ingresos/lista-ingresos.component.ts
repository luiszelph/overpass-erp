import { Component, OnInit } from '@angular/core';
//import { ingresos } from '../ejemplos-ingresos';
import { TablaIngreso } from 'src/app/Models/Ingresos/TablaIngreso';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-ingresos',
  templateUrl: './lista-ingresos.component.html',
  styleUrls: ['./lista-ingresos.component.scss']
})
export class ListaIngresosComponent implements OnInit {
  
  tablaIngresos: TablaIngreso[] = [];
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTablaIngresos()
    .subscribe({
      next: (tablaIngresos) =>
        this.tablaIngresos = tablaIngresos
    });
  }
  //ingresos = ingresos;
}
