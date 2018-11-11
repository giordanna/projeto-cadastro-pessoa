import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { ErroComponent } from './erro/erro.component';

const routes: Routes = [
  { path: 'criar', component: CriarPessoaComponent },
  { path: 'lista', children: [
      { path: '', component: PessoasComponent },
      { path: ':id', component: PessoasComponent }
    ]
  },
  { path: '',
    redirectTo: '/criar',
    pathMatch: 'full'
  },
  { path: 'erro', component: ErroComponent },
  { path: '**', redirectTo: '/erro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
