import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {
  novaPessoa: {} = {
    nome: 'Fulano de Tal',
    idade: '29',
    email: 'fulano@exemplo.com',
    login: 'fulano.29',
    senha: '123qwe',
    status: false
  };

  constructor(public api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  onAdicionarPessoa() {
    this.api.createPessoa(this.novaPessoa).subscribe((result) => {
      this.router.navigate(['/lista']);
    }, (err) => {
      console.log(err);
    });
  }

}
