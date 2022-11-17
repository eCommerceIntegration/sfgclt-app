import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegusersRoutingModule } from './regusers-routing.module';
import { ReguserComponent } from './reguser/reguser.component';


@NgModule({
  declarations: [
    ReguserComponent
  ],
  imports: [
    CommonModule,
    RegusersRoutingModule
  ]
})
export class RegusersModule { }
