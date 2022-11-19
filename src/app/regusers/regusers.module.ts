import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegusersRoutingModule } from './regusers-routing.module';
import { ReguserListComponent } from './reguser-list/reguser-list.component';
import { ReguserFormComponent } from './reguser-form/reguser-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   ReguserListComponent,
   ReguserFormComponent
  ],
  imports: [
    CommonModule,
    RegusersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegusersModule { }
