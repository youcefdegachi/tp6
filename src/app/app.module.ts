import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapG1Component } from './face-snap-g1/face-snap-g1.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';




@NgModule({
  declarations: [
    AppComponent,
    FaceSnapG1Component,
    FaceSnapListComponent,
    LandingPageComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatButtonModule,
    BrowserAnimationsModule,
  MatButtonModule, MatDividerModule, MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
