import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';
@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html'
})
export class PessoasComponent implements OnInit {
  pessoaCadastrada = false;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.pessoaCadastrada = this.data.add;
  }

}
