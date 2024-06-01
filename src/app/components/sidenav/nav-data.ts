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
        label: 'Ingresos'
    }
    ,{
        routerLink: 'egresos',
        icon: 'fa fa-file-invoice',
        label: 'Egresos'
    }
    ,{
        routerLink: 'catalogos',
        icon: 'fa fa-folder',
        label: 'Catalogos'
    }
];