import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PessoaModule } from '../../shared/pessoa.module';
import { ApiService } from '../../api.service';
import {DataService} from '../../shared/data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {
  query = '';
  pessoas: PessoaModule[] = [];
  pessoasVisiveis: PessoaModule[] = [];

  constructor(public api: ApiService, private data: DataService, private router: Router) { }

  ngOnInit() {
    this.getPessoas();
  }

  getPessoas() {
    this.api.getAllPessoas().subscribe((data: PessoaModule[]) => {
      this.pessoas = data;
      this.pessoasVisiveis = this.pessoas;
    }, (err) => {
      this.data.storage = 'Erro: Não foi possível acessar o banco de dados.';
      this.router.navigate(['/erro']);
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
