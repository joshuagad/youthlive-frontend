import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ReportsComponent } from './reports.component';
import { ChartAgeDemographicComponent } from './chart-age-demographic/chart-age-demographic.component';

import { ReportsDataService } from './shared/reports-data.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    ReportsComponent
  ],
  declarations: [
    ReportsComponent,
    ChartAgeDemographicComponent,
  ],
  providers: [
    ReportsDataService
  ]
})
export class ReportsModule { }
