import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';



// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router
  exports: [RouterModule], // Make RouterModule available throughout the app
})
export class AppRoutingModule {}

