import { Injectable } from '@angular/core';
import { SchoolForm } from '../search/service/school-form';

export interface Message {
  nuAnoCenso: number
  coEntidade: number,
  noEntidade: string,
  tpDependencia: number,
  rede: string,
  localizacao:string,
  noRegiao:string,
  coUf:number,
  sgUf:string,
  coMunicipio:number,
  noMunicipio:string,
  coCep:number,
  dsEndereco:string,
  nuEndereco:any,
  dsComplemento: string,
  noBairro: any,
  nuDdd:number,
  nuTelefone:number,
  nuTelefonePublico:any,
  nuFax:any,
  latitude:number,
  longitude: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public formdata: SchoolForm = new SchoolForm()
  public actualpage: number = 0
  public nextpage: boolean = false

  public messages: Message[] = []
  //   {
  //     fromName: 'Laurent Ruthford',
  //     subject: 'Long time no chat',
  //     date: '6:12 AM',
  //     id: 1,
  //     read: false,
  //     nuAnoCenso: 2021,
  //     coEntidade: 12009415,
  //     noEntidade: "ESC FERNANDO DE NORONHA",
  //     tpDependencia: 2,
  //     rede:"Estadual",
  //     localizacao:"Rural",
  //     noRegiao:"Norte",
  //     coUf:12,
  //     sgUf:"AC",
  //     coMunicipio:1200138,
  //     noMunicipio:"Bujari",
  //     coCep:69926000,
  //     dsEndereco:"BR 364 KM 52 RAMAL LINHA NOVA KM 08",
  //     nuEndereco:0,
  //     dsComplemento: "",
  //     noBairro: "",
  //     nuDdd:68,
  //     nuTelefone:32311142,
  //     nuTelefonePublico:0,
  //     nuFax:0,
  //     latitude:0,
  //     longitude: 0
  //   }
  // ];

  constructor() { }


  public getSchools(): Message[] { //Devolve a lista de escolas
    return this.messages;
  }

  public getSchoolSearchById(id: number): Message { //Obtém uma única escola
    const index = this.messages.findIndex(value => value.coEntidade == id)
    return this.messages[index]
  }

  public updateSchoolsList(schools: Message[]) {  //Atualiza as escolas buscadas
    this.messages = schools
  }
}
