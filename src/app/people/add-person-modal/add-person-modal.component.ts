import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { PeopleDataService } from '../shared/people-data.service';

@Component({
  selector: 'app-add-person-modal',
  templateUrl: './add-person-modal.component.html',
  styleUrls: ['./add-person-modal.component.css'],
  providers: [ DatePipe ]
})
export class AddPersonModalComponent implements OnInit {

  newPersonForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private peopleDataService: PeopleDataService,
    public modalRef: BsModalRef
  ) {
    this.newPersonForm = fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      nickname: '',
      gender: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

}
