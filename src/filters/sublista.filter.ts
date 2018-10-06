import { Pipe, PipeTransform } from '@angular/core';
import { Pessoa } from '../interfaces/pessoa';
@Pipe({
    name: 'sublista'
})
export class SubLista implements PipeTransform {
    transform(pessoas: Pessoa[], input: string) : Pessoa[] {
    return pessoas.filter(
        pessoa => pessoa.nome.toLowerCase().includes(input.toLowerCase()));
    }
}