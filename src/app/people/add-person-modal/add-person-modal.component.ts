import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from '../shared/person.model';

import { PeopleDataService } from '../shared/people-data.service';

@Component({
  selector: 'app-add-person-modal',
  templateUrl: './add-person-modal.component.html',
  styleUrls: ['./add-person-modal.component.css']
})
export class AddPersonModalComponent implements OnInit {

  newPersonForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private peopleDataService: PeopleDataService,
    public modalRef: BsModalRef,
    private router: Router
  ) {
    this.newPersonForm = fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      nickname: '',
      gender: ['', Validators.required]
    });
  }

  saveAndClose(): void {
    const savePerson: Person = this.newPersonForm.value;
    this.modalRef.hide();
    this.peopleDataService.addPerson(savePerson).subscribe(person =>
      console.log(person)
    );
  }

  ngOnInit() {
  }

}
