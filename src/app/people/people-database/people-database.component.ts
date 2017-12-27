import { Component, OnInit } from '@angular/core';
import { PeopleDataService } from '../shared/people-data.service';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-people-database',
  templateUrl: './people-database.component.html',
  styleUrls: ['./people-database.component.css']
})
export class PeopleDatabaseComponent implements OnInit {

  people: Person[];

  constructor(private peopleDataService: PeopleDataService) { }

  getAllPeople(): void {
    this.peopleDataService.getAllPeople().subscribe(people => {
      this.people = people;
    })
  }

  ngOnInit() {
    this.getAllPeople();
  }

}
