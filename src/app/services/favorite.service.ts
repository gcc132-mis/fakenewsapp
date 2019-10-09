import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';

import { FavoriteModel } from '../model/favorite.model';
import { FavoriteTypeModel } from '../model/favorite-type.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  API_URL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getFavoriteId(userId: number, newsId: number, type: FavoriteTypeModel): Promise<number> {
    return this.http.get(`${this.API_URL}/favorites?userId=${userId}&newsId=${newsId}&favoriteType=${type}`).map(
      (favorites: FavoriteModel[]) => {        
        return (favorites.length == 0) ? null : favorites[0].id;
      }
    ).toPromise();
  }

  public getAllByUser(userId: number, type: FavoriteTypeModel): Promise<FavoriteModel[]> {
    return this.http.get(`${this.API_URL}/favorites?_expand=news&_expand=user&userId=${userId}&favoriteType=${type}`).map(
      (itens: FavoriteModel[]) => {        
        return itens.map(
          (item: FavoriteModel) => {
            return new FavoriteModel(item.id, item.user, item.news, item.favoriteType);
          }
        )}
    ).toPromise();
  }

  public add(favorite: FavoriteModel): Promise<number> {
    const data: any = {
      newsId: favorite.news.id,
      userId: favorite.user.id,
      favoriteType: favorite.favoriteType,
    }
    return this.http.post(`${this.API_URL}/favorites`, data).map(
      (favorite: FavoriteModel) => {
        return favorite.id;
      }   
    ).toPromise();
  }

  public delete(id: number): Promise<any> {    
    return this.http.delete(`${this.API_URL}/favorites/${id}`).toPromise();
  }
}
