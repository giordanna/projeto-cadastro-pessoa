import { Component, OnInit } from '@angular/core';
import { PessoaModule } from '../../shared/pessoa.module';
import { ApiService } from '../../api.service';
import {PagerService} from '../../pager.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {
  query = '';
  pessoas: PessoaModule[] = [];
  pessoasVisiveis: PessoaModule[] = [];
  pessoasPaginadas: PessoaModule[] = [];
  pager: any = {};

  constructor(public api: ApiService, private pagerService: PagerService) { }

  ngOnInit() {
    this.getPessoas();
  }

  getPessoas() {
    this.pessoas = this.api.getAllPessoas();
    if (!this.pessoas) this.pessoas = [];
    this.pessoasVisiveis = this.pessoas;
    this.pessoasPaginadas = this.pessoas;
    this.onMudarPaginas(1);
  }

  onMudarPaginas(pagina: number) {
    this.pager = this.pagerService.getPager(this.pessoasVisiveis.length, pagina);
    this.pessoasPaginadas = this.pessoasVisiveis.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
    this.onMudarPaginas(1);
  }

}
