import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pessoa } from '../interfaces/pessoa';

@Injectable()
export class PessoaService {

    private _url : string = "http://localhost:3000/pessoas";
    // private _url : string = "http://192.168.0.11:3000/pessoas";
    constructor(private _http: Http) { }

    public getPessoas(): Observable<Pessoa[]> {
        return this._http
            .get(this._url)
            .pipe(map(response=>{return response.json()}));
    }

    public savePessoa(pessoa: Pessoa): Observable<Pessoa> {
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        return this._http
            .post(this._url, JSON.stringify(pessoa).toString(), options)
            .pipe(map(response=>{return response.json()}));
    }

    public removePessoa(pessoa: Pessoa): Observable<Pessoa> {
        return this._http
            .delete(this._url+'/'+pessoa.id)
            .pipe(map(response=>response.json()));
    }

}