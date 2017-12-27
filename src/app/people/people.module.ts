import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { D3Module } from '../shared/d3.module';

import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';
import { PeopleDatabaseComponent } from './people-database/people-database.component';
import { DiscipleshipGraphComponent } from './discipleship-graph/discipleship-graph.component';

import { PeopleDataService } from './shared/people-data.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    D3Module
  ],
  exports: [
    PeopleComponent,
    PersonComponent,
    PeopleDatabaseComponent,
    DiscipleshipGraphComponent
  ],
  declarations: [
    PeopleComponent,
    PersonComponent,
    PeopleDatabaseComponent,
    DiscipleshipGraphComponent
  ],
  providers: [
    PeopleDataService
  ]
})
export class PeopleModule { }
