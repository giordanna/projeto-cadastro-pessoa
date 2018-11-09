import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PessoaModule } from '../../shared/pessoa.module';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  pessoas: PessoaModule[] = [];
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.getPessoas();
  }

  getPessoas() {
    this.api.getAllPessoas().subscribe((data: PessoaModule[]) => {
      this.pessoas = data;
    });
  }

}
