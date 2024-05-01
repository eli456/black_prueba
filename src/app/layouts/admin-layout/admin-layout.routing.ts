import { Routes } from "@angular/router";

import { UserComponent } from "../../pages/User/user.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { CrearComponent } from "../../pages/Crear/crear.component";
import { ProductComponent } from "../../pages/Product/product.component";
import { IngredientesComponent } from "../../pages/Ingredientes/ingredientes.component";
import { cuentasComponent } from "../../pages/cuentas/cuentas.component";
import { TypographyComponent } from "../../pages/typography/typography.component";


export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "crear", component: CrearComponent },
  { path: "product", component: ProductComponent},
  { path: "ingredientes", component: IngredientesComponent},
  { path: "typography", component: TypographyComponent },
  { path: "cuentas", component: cuentasComponent},
  
  
];
