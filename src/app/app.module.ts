import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { BackgroundColorChangeDirective } from './background-color-change.directive';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './core/UserManager/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DetailsUserComponent } from './details-user/details-user.component'; // Import FormsModule
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ListUserComponentComponent,
    BackgroundColorChangeDirective,
    ListProduitsComponentComponent,
    NotFoundComponent,
    LoginComponent,
    NavbarComponent,
    DetailsUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
