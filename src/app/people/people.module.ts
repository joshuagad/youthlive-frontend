import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PeopleRoutingModule } from './people-routing.module';

import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';
import { PeopleDatabaseComponent } from './people-database/people-database.component';

import { PeopleDataService } from './shared/people-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    PeopleRoutingModule
  ],
  exports: [
    PeopleComponent,
    PersonComponent,
    PeopleDatabaseComponent
  ],
  declarations: [
    PeopleComponent,
    PersonComponent,
    PeopleDatabaseComponent
  ],
  providers: [
    PeopleDataService
  ]
})
export class PeopleModule { }
