import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';

import { FavoriteModel } from '../model/favorite.model';
import { FavoriteType } from '../model/favorite-type.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  API_URL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getIdByUserAndNews(userId: number, newsId: number, type: FavoriteType): Promise<number> {
    return this.http.get(`${this.API_URL}/favorites?userId=${userId}&newsId=${newsId}&favoriteType=${type}`).map(
      (favorites: FavoriteModel[]) => {        
        return (favorites.length == 0) ? null : favorites[0].id;
      }
    ).toPromise();
  }

  public getAllByUser(userId: number, type: FavoriteType): Promise<FavoriteModel[]> {
    return this.http.get(`${this.API_URL}/favorites?_expand=news&userId=${userId}&favoriteType=${type}`).map(
      (favorites: FavoriteModel[]) => {        
        return favorites.map(
          (favorite: FavoriteModel) => new FavoriteModel(favorite)
        )}
    ).toPromise();
  }

  public add(favorite: FavoriteModel): Promise<number> {
    return this.http.post(`${this.API_URL}/favorites`, favorite).map(
      (favorite: FavoriteModel) => favorite.id   
    ).toPromise();
  }

  public delete(id: number): Promise<any> {    
    return this.http.delete(`${this.API_URL}/favorites/${id}`).toPromise();
  }
}
