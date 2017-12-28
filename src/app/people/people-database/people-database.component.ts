import { Component, OnInit } from '@angular/core';
import { PeopleDataService } from '../shared/people-data.service';
import { Person } from '../shared/person.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-people-database',
  templateUrl: './people-database.component.html',
  styleUrls: ['./people-database.component.css']
})
export class PeopleDatabaseComponent implements OnInit {

  people: Person[];

  constructor(
    private peopleDataService: PeopleDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getAllPeople(): void {
    this.peopleDataService.getAllPeople().subscribe(people => {
      this.people = people;
    })
  }

  viewPerson(person: Person) {
    this.router.navigate(['../view', person._id], {relativeTo: this.route})
  }

  ngOnInit() {
    this.getAllPeople();
  }

}
