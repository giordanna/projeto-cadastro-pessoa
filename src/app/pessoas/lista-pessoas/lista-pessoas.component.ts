import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PessoaModule } from '../../shared/pessoa.module';
@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  pessoas: PessoaModule[] = [
    new PessoaModule(
      1,
      'Nome 1',
      'nome1@email.com',
      25,
      'nome1',
      '123qwe',
      false
    ),
    new PessoaModule(
      2,
      'Nome 2',
      'nome2@email.com',
      33,
      'nome2',
      '123qwe',
      true
    ),
  ];
  constructor() { }

  ngOnInit() {
  }

}
