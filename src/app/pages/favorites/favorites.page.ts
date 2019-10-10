import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorite.service';
import { FavoriteModel } from 'src/app/model/favorite.model';
import { FavoriteTypeModel } from 'src/app/model/favorite-type.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  lstFavoriteNews: FavoriteModel[];
  userId: number;

  constructor(private favoritesService: FavoritesService) {
  }

  ngOnInit() { }

  async ionViewDidEnter() {
    this.userId = 1; // fake userid
    this.lstFavoriteNews = await this.favoritesService.
    getAllByUser(this.userId, FavoriteTypeModel.STAR);
    console.log(this.lstFavoriteNews);
  }
}
