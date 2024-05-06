import { Component } from '@angular/core';
import { ingresos } from '../ejemplos-ingresos';

@Component({
  selector: 'app-lista-ingresos',
  templateUrl: './lista-ingresos.component.html',
  styleUrls: ['./lista-ingresos.component.scss']
})
export class ListaIngresosComponent {
  ingresos = ingresos;
}
