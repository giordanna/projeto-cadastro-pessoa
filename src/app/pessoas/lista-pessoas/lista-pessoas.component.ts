import {Component, OnInit} from '@angular/core';
import { PessoaModule } from '../../shared/pessoa.module';
import { ApiService } from '../../api.service';
import {DataService} from '../../shared/data.service';
import {Router} from '@angular/router';
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

  constructor(private pagerService: PagerService, public api: ApiService, private data: DataService, private router: Router) { }

  ngOnInit() {
    this.getPessoas();
  }

  getPessoas() {
    this.api.getAllPessoas().subscribe((data: PessoaModule[]) => {
      this.pessoas = data;
      this.pessoasVisiveis = this.pessoas;
      this.pessoasPaginadas = this.pessoas;
      this.onMudarPaginas(1);
    }, () => {
      this.data.storage = 'Erro: Não foi possível acessar o banco de dados.';
      this.router.navigate(['/erro']);
    });
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
