import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AddPersonModalComponent } from '../add-person-modal/add-person-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DatabaseTableService } from '../shared/database-table.service';
import { Observable } from 'rxjs/Observable';

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
  peopleList$: Observable<Person[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    private databaseTableService: DatabaseTableService
  ) { }

  viewPerson(person: Person) {
    this.router.navigate(['../view', person._id], {relativeTo: this.route})
  }

  addPerson() {
    this.modalService.show(AddPersonModalComponent);
  }

  deletePeople() {
    var toDelete = Object.entries(this.selectedPeople).filter(arr => arr[1]).map(arr => arr[0]);
    this.databaseTableService.deletePeople(toDelete);
    this.selectedPeople = {};
  }

  refreshTable() {
    this.databaseTableService.refreshTable();
  }

  selectAllPeople(): void {
    // for (let i=0; i<this.peopleList$.length; i++) {
    //   this.selectedPeople[] = this.selectedAllPeople;
    // }
  }

  ngOnInit() {
    this.refreshTable();
    this.peopleList$ = this.databaseTableService.getPeopleList();
  }

}
