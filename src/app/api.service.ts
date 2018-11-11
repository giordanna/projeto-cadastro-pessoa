import { Injectable } from '@angular/core';
import {PessoaModule} from './shared/pessoa.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
  }

  public getAllPessoas() {
    try {
      return JSON.parse(localStorage.getItem('pessoas')).map(
        pessoa => pessoa as PessoaModule);
    } catch (e) {
      return null;
    }
  }

  public createPessoa(pessoa) {
    let pessoas;
    try {
      pessoas = JSON.parse(localStorage.getItem('pessoas'));
    } catch (e) {
      pessoas = [];
    }
    // evita problema do json fazer o parse, mas ser null
    pessoas = pessoas ? pessoas : [];

    pessoa.id = pessoas.length + 1;
    pessoas.push(pessoa);
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
  }

  public getPessoaById(pessoaId: number) {
    try {
      const pessoas = JSON.parse(localStorage.getItem('pessoas'));
      return pessoas.filter((p) => (p.id === pessoaId)).map(
        pessoa => pessoa as PessoaModule)[0];
    } catch (e) {
      return null;
    }
  }
}
