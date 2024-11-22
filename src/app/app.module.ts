// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LandingPageComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'; // For menu
import { MatButtonModule } from '@angular/material/button'; // For button elements
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material animations
import { LandingPageComponent } from './landing-page/landing-page.component';

// Import the CarouselModule from ngx-bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel'; // Import CarouselModule

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Ensure animations are enabled
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    CarouselModule.forRoot(),  // Add the CarouselModule in imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

