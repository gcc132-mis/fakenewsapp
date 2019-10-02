import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorite.service';
import { FavoriteModel } from 'src/app/model/favorite.model';
import { AuthService } from 'src/app/services/auth.service';
import { FavoriteType } from 'src/app/model/favorite-type.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  lstFavoriteNews: FavoriteModel[];
  userId: number;

  constructor(private favoritesService: FavoritesService,
    private authService: AuthService) {
  }

  ngOnInit() {}

  async ionViewDidEnter() {
    this.userId = this.authService.getAuthUserId(); // fake id
    this.updateLstFavoriteNews();
  }

  async removeFavorite(favoriteId: number) {
    await this.favoritesService.delete(favoriteId);
    this.updateLstFavoriteNews();
  }

  async updateLstFavoriteNews() {
    this.lstFavoriteNews = await this.favoritesService.getAllByUser(this.userId, FavoriteType.STAR);
  }
}
