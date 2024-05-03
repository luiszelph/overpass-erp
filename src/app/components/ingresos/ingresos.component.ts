import { Component, Input } from '@angular/core';
//import { INavbarData } from '../sidenav/helper';
import { navbarData } from '../sidenav/nav-data';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent {

  navData = navbarData;

  // @Input() data: INavbarData = {
  //   routerLink: '',
  //   icon: '',
  //   label: '',
  //   items: [],

  // }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multipled: boolean = false;

  constructor() {}
  ngOnInit(): void {

  }
}
