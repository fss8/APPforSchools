import { FavoriteListService } from './service/favorite-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage {

  constructor(private favoriteList: FavoriteListService) { }

  getList() { //Obtém lista de favoritos
    return this.favoriteList.getAll();
  }

}
