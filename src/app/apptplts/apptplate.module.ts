import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTpltRoutingModule } from './apptplate-routing.module';
import { AppTpltListComponent } from '@app/AppTplts/AppTplt-list/AppTplt-list.component';
import { AppTpltFormComponent } from '@app/AppTplts/AppTplt-form/AppTplt-form.component';
import { ApptpltsComponent } from './apptplate/AppTplts.component';

/* An NgModule is a class marked by the @NgModule decorator. 
@NgModule takes a metadata object that describes how to compile a component's 
template and how to create an injector at runtime.
-declarations: componentes
-imports : modulos del sistema y modulos z 
 */

@NgModule({
  declarations: [
    AppTpltListComponent,
    AppTpltFormComponent,
    ApptpltsComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppTpltRoutingModule
  ]
})
export class AppTpltsModule { }
