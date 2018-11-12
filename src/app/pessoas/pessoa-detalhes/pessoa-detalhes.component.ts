import {Component, OnInit} from '@angular/core';
import {PessoaModule} from '../../shared/pessoa.module';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../api.service';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-pessoa-detalhes',
  templateUrl: './pessoa-detalhes.component.html'
})
export class PessoaDetalhesComponent implements OnInit {
  pessoa: PessoaModule = null;
  senhaInvisivel = true;

  constructor( private data: DataService, public api: ApiService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.url.subscribe(params => {
      if (params[0]) {
        const id = parseInt(params[0].path, 10);
        if (!isNaN(id)) {
          this.getPessoaDetalhes(id);
        } else {
          this.data.storage = 'Erro: ID não é um número.';
          this.router.navigate(['/erro']);
        }
      }
    });
  }

  getPessoaDetalhes(id: number) {
    this.api.getPessoaById(id).subscribe((data) => {
      if (data['status'] !== 404) {
        this.pessoa = data;
      } else {
        this.data.storage = 'Erro: ID não existe no banco de dados.';
        this.router.navigate(['/erro']);
      }
    });
  }

}
