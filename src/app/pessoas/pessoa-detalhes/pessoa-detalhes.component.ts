import {Component, OnInit} from '@angular/core';
import {PessoaModule} from '../../shared/pessoa.module';

@Component({
  selector: 'app-pessoa-detalhes',
  templateUrl: './pessoa-detalhes.component.html',
  styleUrls: ['./pessoa-detalhes.component.css']
})
export class PessoaDetalhesComponent implements OnInit {
  pessoa: PessoaModule = new PessoaModule(
    1,
    'Nome 1',
    'nome1@email.com',
    25,
    'nome1',
    '123qwe',
    false
  );

  constructor() { }

  ngOnInit() {
  }

}
