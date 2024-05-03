import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routerLink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Dashboard'
    }
    ,{
        routerLink: 'ingresos',
        icon: 'fa fa-money-bill',
        label: 'Ingreos',
        items: [
            {
                routerLink: 'ingresos/lista-ingresos',
                label: 'Lista Ingreos'
            },
            { 
                routerLink: 'ingresos/nuevo-ingresos',
                label: 'Nuevo Ingreos'
            }
        ]
    }
    ,{
        routerLink: 'egresos',
        icon: 'fa fa-file-invoice',
        label: 'Egresos'
    }
];