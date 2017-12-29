import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../shared/person.model';
import { PeopleDataService } from '../shared/people-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [ DatePipe ]
})
export class PersonComponent implements OnInit {

  person = new Person;

  personForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private peopleDataService: PeopleDataService
  ) {
    this.personForm = fb.group({
      given_name: '',
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      full_name: '',
      nickname: '',
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      grade: '',
      school: '',
      church: ''
    });
  }

  getPerson(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    this.peopleDataService.getPersonById(id).subscribe(person => {
      this.person = person;
      this.person.birthdate = this.datePipe.transform(this.person.birthdate, 'y-MM-dd');
      this.revertData();
    })
  }

  updatePerson(): void {
    const savePerson: Person = this.personForm.value;
    savePerson._id = this.person._id;
    this.peopleDataService.updatePerson(savePerson).subscribe(value => {
      this.refreshData();
    });
  }

  revertData(): void {
    this.personForm.reset(this.person);
  }

  refreshData(): void {
    this.getPerson();
  }

  submitData(): void {
    this.updatePerson();
  }

  ngOnInit() {
    this.getPerson();
  }

}
