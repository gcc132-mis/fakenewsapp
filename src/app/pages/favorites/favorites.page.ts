import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorite.service';
import { FavoriteModel, FavoriteTypeModel } from 'src/app/model/favorite.model';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  lstFavoriteNews: FavoriteModel[];
  user: UserModel = new UserModel("Paulo", "paulo@email.com", 1);  // fake user

  constructor(public favoritesService: FavoritesService) {
  }

  ngOnInit() { }

  async ionViewDidEnter() {
    this.lstFavoriteNews = await this.favoritesService.
    getAllByUser(this.user.id, FavoriteTypeModel.STAR);
    console.log(this.lstFavoriteNews);
  }
}
