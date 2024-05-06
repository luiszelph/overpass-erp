import { Component } from '@angular/core';
import { ingresos } from '../ejemplos-ingresos';

@Component({
  selector: 'app-nuevo-ingreso',
  templateUrl: './nuevo-ingreso.component.html',
  styleUrls: ['./nuevo-ingreso.component.scss']
})
export class NuevoIngresoComponent {
  ingresos = ingresos;
}
