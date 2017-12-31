import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Person } from '../shared/person.model';
import { PeopleDataService } from '../shared/people-data.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [ DatePipe ]
})
export class PersonComponent implements OnInit {
  person = new Person;

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private peopleDataService: PeopleDataService
  ) { }

  getPerson(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    this.peopleDataService.getPersonById(id).subscribe(person => {
      this.person = person;
      this.person.birthdate = this.datePipe.transform(this.person.birthdate, 'y-MM-dd');
    })
  }

  ngOnInit() {
    this.getPerson();
  }
}
