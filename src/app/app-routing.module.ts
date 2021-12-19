import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
const routes:Routes=[
    {path:"",redirectTo:"/dashboard",pathMatch:'full'},
    {path:"dashboard",component:DashboardComponent},
    {path:"food",component:HomeComponent,canActivate:[AuthGuard]},
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule
{

}