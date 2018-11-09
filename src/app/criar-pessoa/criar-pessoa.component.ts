import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {
  /* consultado: https://scotch.io/tutorials/angular-2-form-validation */
  form: FormGroup;

  constructor(public api: ApiService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      idade: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      email: ['', [Validators.required, Validators.email]],
      /* consultado: https://stackoverflow.com/questions/1221985/how-to-validate-a-user-name-with-regex */
      login: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$')]
      ],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      status: ['']
    });
  }

  get f() { return this.form.controls; }

  onAdicionarPessoa() {
    this.api.createPessoa(this.form.value).subscribe((result) => {
      this.router.navigate(['/lista']);
    }, (err) => {
      console.log(err);
    });
  }

}
