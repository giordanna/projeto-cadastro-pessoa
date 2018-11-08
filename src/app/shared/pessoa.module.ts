import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PessoaModule {

  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public idade: number,
    public login: string,
    public senha: string,
    public status: boolean) {}
}
