import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { LandingModule } from './landing/landing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './landing/navbar/navbar.component';
import { BodyComponent } from './landing/body/body.component';
import { FooterComponent } from './landing/footer/footer.component';
import { HeaderComponent } from './landing/header/header.component';
import { UserService } from './users/services/user-service'
import { RegUserService } from './regusers/services/reguser-service';

@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LandingModule,
    UsersModule,
    AppRoutingModule
  
  ],
  providers: [UserService,RegUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
