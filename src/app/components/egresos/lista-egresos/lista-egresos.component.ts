import { Component, OnInit } from '@angular/core';
import { TablaEgreso } from 'src/app/Models/Egresos/TablaEgreso';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-egresos',
  templateUrl: './lista-egresos.component.html',
  styleUrls: ['./lista-egresos.component.scss']
})
export class ListaEgresosComponent implements OnInit {
  tablaEgresos: TablaEgreso[] = [];
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTablaEgresos()
    .subscribe({
      next: (tablaEgresos) =>
        this.tablaEgresos = tablaEgresos
    });
  }
}
