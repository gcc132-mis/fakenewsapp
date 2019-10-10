import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';

import { FavoriteModel, FavoriteTypeModel } from '../model/favorite.model';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {


  constructor(private http: HttpClient) { }

  public getFavoriteId(userId: number, newsId: number, type: FavoriteTypeModel): Promise<number> {
    return this.http.get(`${API_URL}/favorites?userId=${userId}&newsId=${newsId}&favoriteType=${type}`).map(
      (favorites: FavoriteModel[]) => {        
        return (favorites.length == 0) ? null : favorites[0].id;
      }
    ).toPromise();
  }

  public getAllByUser(userId: number, type: FavoriteTypeModel): Promise<FavoriteModel[]> {
    return this.http.get(`${API_URL}/favorites?_expand=news&_expand=user&userId=${userId}&favoriteType=${type}`).map(
      (itens: FavoriteModel[]) => {        
        return itens.map(
          (item: FavoriteModel) => {
            return new FavoriteModel(item.user, item.news, item.favoriteType, item.id);
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
    return this.http.post(`${API_URL}/favorites`, data).map(
      (favorite: FavoriteModel) => {
        return favorite.id;
      }   
    ).toPromise();
  }

  public delete(id: number): Promise<any> {    
    return this.http.delete(`${API_URL}/favorites/${id}`).toPromise();
  }
}
