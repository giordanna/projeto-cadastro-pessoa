import {Component, OnInit} from '@angular/core';
import {PessoaModule} from '../../shared/pessoa.module';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-pessoa-detalhes',
  templateUrl: './pessoa-detalhes.component.html',
  styleUrls: ['./pessoa-detalhes.component.css']
})
export class PessoaDetalhesComponent implements OnInit {
  pessoa: PessoaModule = null;

  constructor( public api: ApiService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.url.subscribe(params => {
      if (params[0]) {
        const id = parseInt(params[0].path, 10);
        if (!isNaN(id)) {
          this.getPessoaDetalhes(id);
        } else {
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
        this.router.navigate(['/erro']);
      }
    });
  }

}
