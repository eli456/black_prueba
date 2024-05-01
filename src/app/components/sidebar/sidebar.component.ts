import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [

  /*{
    path: "/user",
    title: "User Profile",
    icon: "icon-single-02",
    class: ""
  },
  */
  {
    path: "/ingredientes",
    title: "Ingredientes",
    icon: "icon-bullet-list-67",
    class: ""
  },
  {
    path: "/product",
    title: "Productos",
    icon: "icon-cart",
    class: ""
  },
  
  {
    path: "/crear",
    title: "Usuarios",
    icon: "icon-single-02",
    class: ""
  },

  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "icon-chart-pie-36",
    class: ""
  },
  
  {
    path: "/cuentas",
    title: "Cuentas de Servicio",
    icon: "icon-puzzle-10",
    class: ""
  },

  {
    path: "/typography",
    title: "Typography",
    icon: "icon-align-center",
    class: ""
  },

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
