import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { PeopleRoutingModule } from './people-routing.module';

import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';
import { PeopleDatabaseComponent } from './people-database/people-database.component';

import { PeopleDataService } from './shared/people-data.service';
import { AddPersonModalComponent } from './add-person-modal/add-person-modal.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
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
    PeopleDatabaseComponent,
    AddPersonModalComponent,
    PersonProfileComponent
  ],
  entryComponents: [
    AddPersonModalComponent
  ],
  providers: [
    PeopleDataService
  ]
})
export class PeopleModule { }
