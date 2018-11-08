import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { ListaPessoasComponent } from './pessoas/lista-pessoas/lista-pessoas.component';
import { PessoaDetalhesComponent } from './pessoas/pessoa-detalhes/pessoa-detalhes.component';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { ErroComponent } from './erro/erro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PessoasComponent,
    ListaPessoasComponent,
    PessoaDetalhesComponent,
    CriarPessoaComponent,
    ErroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
