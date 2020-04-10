import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';
import { CategoryComponent } from './category/category.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BottomComponent } from './bottom/bottom.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    VerticalNavComponent,
    CategoryComponent,
    MovieItemComponent,
    MovieListComponent,
    LoginComponent,
    SignupComponent,
    BottomComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
