/* consultado: https://www.thepolyglotdeveloper.com/2016/10/passing-complex-data-angular-2-router-nativescript/ */
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  storage: any;
  add = false;
  public constructor() {}
}
