import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppOptFormComponent } from '../appopts/appopt-form/appopt-form.component';
import { HttpClientModule } from '@angular/common/http';


import { AppuploadRoutingModule } from './appupload-routing.module';
import { UploadFilesComponent } from './upload-files/upload-files.component';


@NgModule({
  declarations: [
    AppOptFormComponent,
    UploadFilesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppuploadRoutingModule,

  ]
})
export class AppuploadModule { }
