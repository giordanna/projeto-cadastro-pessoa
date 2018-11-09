import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {

  novaPessoaNome: string = 'Fulano';
  novaPessoaIdade: number = 29;
  novaPessoaEmail: string = 'fulano@exemplo.com';
  novaPessoaLogin: string = 'fulano.29';
  novaPessoaSenha: string = '123qwe';
  novaPessoaStatus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
