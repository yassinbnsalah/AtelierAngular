import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { FirstComponent } from './first/first.component';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './core/UserManager/login/login.component';
import { DetailsUserComponent } from './details-user/details-user.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path: "",redirectTo:"login",pathMatch:"full"  },
  {path: "test",component: ListUserComponentComponent},
  {path: "first",component: FirstComponent},
  {path: "first/:id" , component:DetailsUserComponent},
 /* {path: "user" , component:ListUserComponentComponent , children:[
    {path:"add" },
    {path:"update/:id"},
    {path:"delete/:id"}
  ]},*/
  {path: "product",component: ListProduitsComponentComponent  },
  {path: "**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
