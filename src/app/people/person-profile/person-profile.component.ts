import { Component, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Person } from '../shared/person.model';

import { PeopleDataService } from '../shared/people-data.service';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css'],
})
export class PersonProfileComponent implements OnChanges {

  @Input() person;
  personForm: FormGroup;

  constructor(
    private fb: FormBuilder,
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
      mobileno: '',
      email: '',
      facebook_id: '',
      grade: '',
      course: '',
      school: '',
      church: ''
    });
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
    // this.getPerson();
  }

  submitData(): void {
    this.updatePerson();
  }

  ngOnChanges() {
    this.revertData();
  }
}
