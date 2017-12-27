import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person/person.component';
import { ReportsComponent } from './reports/reports.component';

import { DiscipleshipGraphComponent } from './people/discipleship-graph/discipleship-graph.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/discipleshiptree', component: DiscipleshipGraphComponent},
  { path: 'people/:_id', component: PersonComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
