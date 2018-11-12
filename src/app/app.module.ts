import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { ListaPessoasComponent } from './pessoas/lista-pessoas/lista-pessoas.component';
import { PessoaDetalhesComponent } from './pessoas/pessoa-detalhes/pessoa-detalhes.component';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { ErroComponent } from './erro/erro.component';

import { ApiService } from './api.service';
import { DataService } from './shared/data.service';
import {PagerService} from './pager.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PessoasComponent,
    ListaPessoasComponent,
    PessoaDetalhesComponent,
    CriarPessoaComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, DataService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
