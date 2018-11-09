/* consultado: https://www.djamware.com/post/5b87894280aca74669894414/angular-6-httpclient-consume-restful-api-example+ */

import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {PessoaModule} from './shared/pessoa.module';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

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

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private extrairDados(res: Response) {
    let body = res;
    return body || { };
  }

  // API: GET /pessoas
  public getAllPessoas(): Observable<PessoaModule[]> {
    // will use this.http.get()
    return this.http.get(API_URL + '/pessoas').pipe(
      map(this.extrairDados));
  }

  // API: POST /pessoas
  public createPessoa(pessoa: PessoaModule) {
    // will use this.http.post()
  }

  // API: GET /pessoas/:id
  public getPessoaById(pessoaId: number) {
    // will use this.http.get()
  }

  // API: PUT /pessoas/:id
  public updatePessoa(pessoa: PessoaModule) {
    // will use this.http.put()
  }

  // DELETE /pessoas/:id
  public deletePessoaById(pessoaId: number) {
    // will use this.http.delete()
  }
}
