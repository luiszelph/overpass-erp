import { Component, Input } from '@angular/core';
//import { INavbarData } from '../sidenav/helper';
import { navbarData } from '../sidenav/nav-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent {

  private url = '';

  
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
    
  constructor(private http: HttpClient) {}
  
  public getData () : Observable<any> {
    return this.http.get<any>(this.url);
  }
  
  ngOnInit(): void {

  }
}
