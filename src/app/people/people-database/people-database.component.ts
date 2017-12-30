import { Component, OnInit } from '@angular/core';
import { PeopleDataService } from '../shared/people-data.service';
import { Person } from '../shared/person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AddPersonModalComponent } from '../add-person-modal/add-person-modal.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-people-database',
  templateUrl: './people-database.component.html',
  styleUrls: ['./people-database.component.css']
})
export class PeopleDatabaseComponent implements OnInit {

  people: Person[];
  bsModalRef: BsModalRef;

  constructor(
    private peopleDataService: PeopleDataService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService
  ) { }

  getAllPeople(): void {
    this.peopleDataService.getAllPeople().subscribe(people => {
      this.people = people;
    })
  }

  viewPerson(person: Person) {
    this.router.navigate(['../view', person._id], {relativeTo: this.route})
  }

  addPerson() {
    this.modalService.show(AddPersonModalComponent);
  }

  ngOnInit() {
    this.getAllPeople();
  }

}
