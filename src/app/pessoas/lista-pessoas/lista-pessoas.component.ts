import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PessoaModule } from '../../shared/pessoa.module';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {
  query = '';
  pessoas: PessoaModule[] = [];
  pessoasVisiveis: PessoaModule[] = [];

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.getPessoas();
  }

  getPessoas() {
    this.api.getAllPessoas().subscribe((data: PessoaModule[]) => {
      this.pessoas = data;
      this.pessoasVisiveis = this.pessoas;
    });
  }

  filtrarPessoas() {
    /* consultado: https://stackoverflow.com/questions/40678206/angular-2-filter-search-list */
    if (this.query === '') {
      this.pessoasVisiveis = this.pessoas;
    } else {
      this.pessoasVisiveis = Object.assign([], this.pessoas).filter(
        pessoa => pessoa.nome.toLowerCase().indexOf(this.query.toLowerCase()) > -1
      );
    }
  }

}
