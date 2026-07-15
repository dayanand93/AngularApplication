import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-parallelapicall',
  standalone: true,
  imports: [],
  templateUrl: './parallelapicall.component.html',
  styleUrl: './parallelapicall.component.css'
})
export class ParallelapicallComponent  {
    constructor(private http: HttpClient) {}

  url1 = 'https://jsonplaceholder.typicode.com/users';
  url2 = 'https://jsonplaceholder.typicode.com/postsss';
  url3 = 'https://jsonplaceholder.typicode.com/comments';
  
    parallelapi() {
      console.log('parallelapi called');

      forkJoin({
        api1: this.firstappi(),
        api2: this.secondappi(),
        api3: this.thirdappi()
      }).subscribe({
        next: (res) => {
          console.log('All API responses:', res);
        },
      });
    }

    firstappi() {
        return this.http.get(this.url1).pipe(
          catchError((error) => {
            console.error('Error in first API:', error);
            return of(null);
          })
        );
    }

    secondappi() {
        return this.http.get(this.url2).pipe(
          catchError((error) => {
            console.error('Error in second API:', error);
            return of(null);
          })
        );
    }

    thirdappi() {
        return this.http.get(this.url3).pipe(
          catchError((error) => {
            console.error('Error in third API:', error);
            return of(null);
          })
        );
    }
}
