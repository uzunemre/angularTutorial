import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {of} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {Person} from "../person/person";

@Injectable({providedIn: 'root'})
export class PersonService {
  constructor(private httpClient: HttpClient) {
  }

  mocked: Person[] = [
    {
      gender: "male",
      email: "emreuzun92@gmail.com",
      username: "virs",
      name: {title: "Test", first: "Test", last: "Test"},
      fullName: "Test"
    }
  ];

  public getPeopleList(): Observable<Person[]> {
    return of(this.mocked).pipe(
      retry(1),
      catchError(this.errorHandle)
    );
  }


  public updatePerson(data: Person): Observable<any> {
    this.mocked = [data];
    return of(this.mocked).pipe(
      retry(1),
      catchError(this.errorHandle)
    );
  }

  public insertPeople(data: Person): Observable<any> {
    this.mocked.push(data);
    return of(this.mocked).pipe(
      retry(1),
      catchError(this.errorHandle)
    );
  }

  public deletePeople(data: Person): Observable<any> {
    var filtered = this.mocked.filter(function (value, index, arr) {
      return value.name != data.name;
    });
    this.mocked = filtered;
    return of(this.mocked).pipe(
      retry(1),
      catchError(this.errorHandle)
    );
  }

  errorHandle(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
