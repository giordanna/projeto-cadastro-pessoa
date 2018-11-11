import { Inject, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* consultado: https://stackoverflow.com/questions/51275878/angular-cant-resolve-all-parameters-for-component-ng-build-prod */
export const ID: InjectionToken<string> = new InjectionToken<number>('ID');
export const NOME: InjectionToken<string> = new InjectionToken<string>('NOME');
export const EMAIL: InjectionToken<string> = new InjectionToken<string>('EMAIL');
export const IDADE: InjectionToken<string> = new InjectionToken<number>('IDADE');
export const LOGIN: InjectionToken<string> = new InjectionToken<string>('LOGIN');
export const SENHA: InjectionToken<string> = new InjectionToken<string>('SENHA');
export const STATUS: InjectionToken<string> = new InjectionToken<boolean>('STATUS');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PessoaModule {

  constructor(
    @Inject(ID) public id: number,
    @Inject(NOME) public nome: string,
    @Inject(EMAIL) public email: string,
    @Inject(IDADE) public idade: number,
    @Inject(LOGIN) public login: string,
    @Inject(SENHA) public senha: string,
    @Inject(STATUS) public status: boolean) {}
}
