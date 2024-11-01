import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://catfact.ninja/fact';
  private data: any;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    if (this.data) {
      return of(this.data);
    }
    return this.http.get(this.apiUrl).pipe(
      tap(response => this.data = response),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const errorMessage = error.error instanceof ErrorEvent
      ? `An error occurred: ${error.error.message}`
      : `Server returned code: ${error.status}, error message is: ${error.message}`;
    console.error(errorMessage);
    return throwError(() => new Error('An error occurred while fetching data. Please try again later.'));
  }
}
