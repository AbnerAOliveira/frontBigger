import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleRoutingModule } from './google-routing.module';

//VIEWS
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GoogleRoutingModule
  ]
})
export class GoogleModule { }
