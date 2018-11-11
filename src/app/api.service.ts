/* consultado: https://www.djamware.com/post/5b87894280aca74669894414/angular-6-httpclient-consume-restful-api-example+ */

import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(error as T);
    };
  }

  private extrairDados(res: Response) {
    let body = res;
    return body || { };
  }

  // API: GET /pessoas
  public getAllPessoas() {
    return this.http.get(API_URL + '/pessoas').pipe(
      map(this.extrairDados));
  }

  // API: POST /pessoas
  public createPessoa(pessoa) {
    return this.http.post<any>(API_URL + '/pessoas', JSON.stringify(pessoa), httpOptions).pipe(
      catchError(this.handleError<any>('createPessoa'))
    );
  }

  // API: GET /pessoas/:id
  public getPessoaById(pessoaId: number) {
      return this.http.get(API_URL + '/pessoas/' + pessoaId).pipe(
        map(this.extrairDados),
        catchError(this.handleError<any>('getPessoaById'))
      );
  }
}
