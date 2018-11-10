import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})
export class ErroComponent implements OnInit {
  erro = 'Erro 404: Página não encontrada.';

  constructor(private data: DataService) { }

  ngOnInit() {
    const erro = this.data.storage;
    if (erro) {
      this.erro = erro;
    }
  }

}
