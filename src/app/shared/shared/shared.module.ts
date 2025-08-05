import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule,NgxDropzoneModule,BrowserAnimationsModule,ToastrModule.forRoot(),],
  exports: [ReactiveFormsModule, HttpClientModule,NgxDropzoneModule,BrowserAnimationsModule,ToastrModule],
})
export class SharedModule {}
