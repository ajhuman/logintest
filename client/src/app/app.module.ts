import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersWelcomeComponent } from './users/users-welcome/users-welcome.component';

import { UserService } from "./users/user.service"

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersLoginComponent,
    UsersWelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
