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

  databases = [
    {id: 0, name:'All Youth'},
    {id: 1, name:'Congregation'},
    {id: 2, name:'High School Camp'},
    {id: 3, name:'College Camp'}
  ];
  activeDatabase = 0;
  people: Person[];
  bsModalRef: BsModalRef;
  selectedPeople = {};
  selectedAllPeople = false;

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

  deletePeople() {
    var toDelete = Object.entries(this.selectedPeople).filter(arr => arr[1]).map(arr => arr[0]);
    for (let index of toDelete) {
      var id = this.people[index]._id;
      this.peopleDataService.deletePerson(id).subscribe(message => {});
    }
    this.selectedPeople = {};
    this.getAllPeople();
  }

  selectAllPeople(): void {
    for (var i=0; i<this.people.length; i++) {
      this.selectedPeople[i] = this.selectedAllPeople;
    }
  }

  ngOnInit() {
    this.getAllPeople();
  }

}
