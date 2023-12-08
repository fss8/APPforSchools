import { Injectable, Inject, inject } from '@angular/core';
import { DataService, Message } from 'src/app/services/data.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { School } from '../class/school';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {
  private data = inject(DataService);

  constructor(private http: HttpClient, private router: Router) { }

  getSchools(name: string, code: string, page: number) {
    this.requestSchools(name, code, page)
  }

  requestSchools(name: string, code: string, page: number) {
    let query: string = `${environment.api}/escolas?`
    let params = new HttpParams()  //Variação de parâmetros de busca, com código e nome da Escola
    if (code.length > 0){
      params = params.set('coEntidade', Number(code)).set('coEntidade', Number(code))
    }else{
      params = params.set('coEntidade', Number(code)).set('page', page).set('noEntidade', name)
    }

    this.httpReq(query, params).subscribe(  //Busca escolas na API e verifica se possui outra página posterior
      schools => {
        if (schools.length < 10) {
          this.data.nextpage = false
        }else{
          this.httpReq(query, params.set('page', page+1)).subscribe(arg => {
            arg.length > 0 ? this.data.nextpage = true : this.data.nextpage = false
          })
        }
        this.data.updateSchoolsList(schools)
        this.data.actualpage = page
      });
  }

  httpReq(query: string, params: HttpParams){
    return this.http.get<School []>(query, {'params':params})
  }
}
