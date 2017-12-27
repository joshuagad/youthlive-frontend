import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../shared/person.model';
import { PeopleDataService } from '../shared/people-data.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person = new Person;

  personalDetailsList = [
    {label: "Given name", value: "given_name"},
    {label: "Full name", value: "full_name"},
    {label: "Last name", value: "last_name"},
    {label: "Full name", value: "full_name"},
    {label: "Nickname", value: "nickname"},
    {label: "Birthdate", value: "birthdate"},
    {label: "Sex", value: "gender"},
  ];

  constructor(
    private route: ActivatedRoute,
    private peopleDataService: PeopleDataService
  ) { }

  getPerson(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    this.peopleDataService.getPersonById(id).subscribe(person => {
      this.person = person;
    })
  }

  ngOnInit() {
    this.getPerson();
  }

}
