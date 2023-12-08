import { Favorite } from './favorite';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteListService {

  favorites: Favorite[] = []
  constructor() { }

  getAll() { //Obtém todos os favoritos
    const list = window.localStorage.getItem('fav-list')
    if (list) {
      this.favorites = JSON.parse(list)
    }
    return this.favorites
  }

  save(favorite: Favorite) { //Salva uma favorita na memória
    this.favorites.push(favorite)
    window.localStorage.setItem('fav-list', JSON.stringify(this.favorites))
  }

  remove(code: number) { //Remove uma favorita da memória
    const favIndex = this.favorites.findIndex((value) => value.coEntidade == code)
    this.favorites.splice(favIndex, 1)
    console.log(this.favorites)
    window.localStorage.setItem('fav-list', JSON.stringify(this.favorites))
  }

  checkIfFavorite(code: number) { //Verifica se está entre os favoritos
    this.getAll()
    const favIndex = this.favorites.findIndex((value) => value.coEntidade == code)
    return favIndex === -1 ? false : true
  }
}
