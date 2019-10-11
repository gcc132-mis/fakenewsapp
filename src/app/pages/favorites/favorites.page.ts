import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorite.service';
import { FavoriteModel, FavoriteTypeModel } from 'src/app/model/favorite.model';
import { UserModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  lstFavoriteNews: FavoriteModel[];

  constructor(
    public favoritesService: FavoritesService,
    public authService: AuthService,
    public userService: UserService) {
  }

  ngOnInit() { }

  async ionViewDidEnter() {
    const userEmail: string = await this.authService.getAuthEmail();
    const user: UserModel = await this.userService.getUserByEmail(userEmail);
    this.lstFavoriteNews = await this.favoritesService.
      getAllByUser(user.id, FavoriteTypeModel.STAR);
  }
}