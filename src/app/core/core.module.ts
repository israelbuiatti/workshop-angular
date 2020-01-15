import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    // shared modules
    BrowserModule,
    HttpClientModule,

    // shared components
    NavbarComponent
  ]
})
export class CoreModule { }
