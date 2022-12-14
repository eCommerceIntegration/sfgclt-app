import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingModule } from './landing/landing.module';
import { UsersModule } from './users/users.module';
import { RegUsersModule } from './regusers/regusers.module';
import { RegPaysModule } from './regpays/regpays.module';
import { RegAppsModule } from './regapps/regapps.module';
import { AppTxtsModule } from './apptxts/apptxts.module';
import { AppTplateModule } from './apptplates/apptplate.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './landing/navbar/navbar.component';
import { BodyComponent } from './landing/body/body.component';
import { FooterComponent } from './landing/footer/footer.component';
import { HeaderComponent } from './landing/header/header.component';

import { UserService } from './users/services/user-service';
import { RegUserService } from './regusers/services/reguser-service';
import { RegPayService } from './regpays/services/regpay.service';
import { RegAppService } from './regapps/services/regapp.service';
import { AppTxtService } from './apptxts/services/apptxt.service';
import { AppTplateService } from './apptplates/services/apptplate.service';

import { GlobalHttpInterceptorService } from './apptplates/services/GlobalHttpInterceptorService';




@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LandingModule,
    AppRoutingModule,
    UsersModule,
    RegUsersModule,
    RegPaysModule,
    RegAppsModule,
    AppTxtsModule,
    AppTplateModule   
  ],
  providers: [UserService,RegUserService,RegPayService,RegAppService,AppTxtService,AppTplateService,
  { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
