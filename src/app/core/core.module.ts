import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";






@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports:[
    // shared modules
    BrowserModule,
    HttpClientModule,

    // shared components
    NavbarComponent,
    BrowserAnimationsModule
  ]
})
export class CoreModule { }
