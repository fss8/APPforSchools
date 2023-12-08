import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';

import { FavoriteListService } from '../favorite/service/favorite-list.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message!: Message;
  public actualRoute!: string;

  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router)
  private platform = inject(Platform);

  constructor(private favoriteService: FavoriteListService) {}

  ngOnInit() {
    this.actualRoute = this.getActualRoute()
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.actualRoute === 'favorite' ?  //Se é da lista favoritos, busca a escola entre os favoritos, senão: obtém da lista da busca
      this.message = this.favoriteService.favorites[this.favoriteService.favorites.findIndex(value => value.coEntidade == parseInt(id, 10))]
      :
      this.message = this.data.getSchoolSearchById(parseInt(id, 10));

  }

  getBackButtonText() { //Checagem do ionic, padrão do projeto
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

  getActualRoute() { // Obtém a rota atual, para diferenciar o contexto (busca ou favoritos)
    const route =  this.router.url.split('/')
    return route[1]
  }

  isFavorite(code: number) { //Checa se a escola está entre os favoritos
    return this.favoriteService.checkIfFavorite(code)
  }

  saveFavorite(message: Message) {  //Salva uma escola entre os favoritos
    this.favoriteService.save(message)
  }

  removeFavorite(code: number) {  //Remove uma escola dos favoritos
    this.favoriteService.remove(code)
  }
}
