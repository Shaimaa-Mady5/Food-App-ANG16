import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboaredRoutingModule } from './dashboared-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboaredRoutingModule
  ]
})
export class DashboaredModule { }
