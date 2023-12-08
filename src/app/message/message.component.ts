import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Message } from '../services/data.service';
import { FavoriteListService } from '../favorite/service/favorite-list.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  private platform = inject(Platform);
  private favoriteService = inject(FavoriteListService)
  @Input() message?: Message;
  @Input() variavel?: boolean
  isIos() {
    return this.platform.is('ios')
  }

  isFavorite(code: number) { //Checa se a escola está entre os favoritos
    return this.favoriteService.checkIfFavorite(code)
  }
}
