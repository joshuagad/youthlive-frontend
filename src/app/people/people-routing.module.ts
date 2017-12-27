import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleDatabaseComponent } from './people-database/people-database.component';

const routes: Routes = [
  { path: '', component: PeopleDatabaseComponent },
  { path: 'database', component: PeopleDatabaseComponent },
  // { path: 'people', loadChildren: 'people/people.module#PeopleModule' },
  // { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PeopleRoutingModule {}
