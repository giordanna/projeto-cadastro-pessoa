import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { ErroComponent } from './erro/erro.component';

const routes: Routes = [
  { path: 'criar', component: CriarPessoaComponent },
  { path: 'lista', component: PessoasComponent },
  { path: '',
    redirectTo: '/lista',
    pathMatch: 'full'
  },
  { path: '**', component: ErroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
