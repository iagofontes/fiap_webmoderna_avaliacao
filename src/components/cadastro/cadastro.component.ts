import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa';
import { PessoaService } from '../../services/pessoa.service';
import { empty } from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  providers: [ PessoaService ]
})
export class CadastroComponent implements OnInit {

  public pessoas : Pessoa[];
  public pessoaSelecionada : Pessoa = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    telefone: ""
  };

  constructor(
    public pessoaService: PessoaService, 
    public snackBar: MatSnackBar
  ) { }
  
  ngOnInit() {
    this.listarPessoas();
  }

  listarPessoas() {
    this.limparArray();
    this.pessoaService
    .getPessoas()
    .subscribe((response)=>this.pessoas = response);
  }

  limparArray() {
    this.pessoas = [];
  }

  removerPessoa(pessoa: Pessoa) {
    if(this.validarPessoa(pessoa)) {
      if(!this.checarArray(pessoa)) {
        this.pessoaService
          .removePessoa(pessoa)
          .subscribe(
            response => {
              this.showMessage('Pessoa removida com sucesso.');
            }, 
            error => {
              console.error(error);
              this.showMessage('Problemas ao remover registro.');
            },
            () => {
              this.listarPessoas();
              this.limparCampos();
            }
          );
      }
    } else {
      this.showMessage('Pessoa não encontrada.');
    }
  }

  limparCampos() {
    this.pessoaSelecionada.id = '';
    this.pessoaSelecionada.nome = '';
    this.pessoaSelecionada.telefone = '';
    this.pessoaSelecionada.cpf = '';
    this.pessoaSelecionada.email = '';
  }

  carregarCampos(pessoa: Pessoa) {
    this.pessoaSelecionada = pessoa;
  }

  salvarNovaPessoa(pessoa: Pessoa) {
    if(this.validarPessoa(pessoa)) {
      if(this.checarArray(pessoa)) {
        this.pessoaService
          .savePessoa(pessoa)
          .subscribe(
            response => {
              this.showMessage('Pessoa cadastrada com sucesso.');
            }, 
            error => {
              console.error(error);
              this.showMessage('Problemas ao gravar registro.');
            },
            () => {
              this.listarPessoas();
            }
          );
      } else {
        this.showMessage('Pessoa já cadastrada.');
      }
    } else { 
      this.showMessage('Dados inválidos.');
    }
  }

  checarArray(pessoa: Pessoa) : Boolean {
    // retornar true se não encontrar ninguem com as mesmas características
    if(this.validarPessoa(pessoa)) {
      if(this.pessoas.filter(
        p => 
          p.id == pessoa.id &&
          p.nome == pessoa.nome && 
          p.cpf == pessoa.cpf && 
          p.email == pessoa.email
        ).length <= 0
      ){
        return true;
      }
    }
    return false;
  }

  validarPessoa(pessoa: Pessoa) : Boolean {
    return this.validarItem(pessoa.nome) && 
      this.validarItem(pessoa.email) &&
      this.validarItem(pessoa.telefone) &&
      this.validarItem(pessoa.cpf);
  }

  validarItem(item) : Boolean {
    return (item != '' && item != undefined && item != null);
  }

  showMessage(message: string) {
    this.snackBar.open(message, "Ok", {
      duration: 2000,
    });
  }
}
