import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegusersRoutingModule } from './regusers-routing.module';
import { ReguserFormComponent } from './reguser-form/reguser-form.component';
import { ReguserListComponent } from './reguser-list/reguser-list.component';


@NgModule({
  declarations: [
    ReguserFormComponent,
    ReguserListComponent
  ],
  imports: [
    CommonModule,
    RegusersRoutingModule
  ]
})
export class RegusersModule { }
