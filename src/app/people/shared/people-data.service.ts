import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Person } from './person.model';

@Injectable()
export class PeopleDataService {

  constructor(
    private http: HttpClient
  ) { }

  private peopleUrl = 'http://localhost:3000/people';

  getAllPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }

  getPersonById(id: string): Observable<Person> {
    const url = `${this.peopleUrl}/${id}`;
    return this.http.get<Person>(url);
  }

  updatePerson(person: Person): Observable<any> {
    const url = `${this.peopleUrl}/${person._id}`;
    return this.http.put<Person>(url, person);
  }

  searchPeople(term: string): Observable<Person[]> {

    if (!term.trim()) {
      return of([]);
    }

    var url = `${this.peopleUrl}/?where[given_name]=${term}`
    console.log(url);
    return this.http.get<Person[]>(url);
}

}
