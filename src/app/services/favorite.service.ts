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

  public isFavorite(userId: number, newsId: number, type: FavoriteType): Promise<boolean> {
    return this.http.get(`${this.API_URL}/favorites?userId=${userId}&newsId=${newsId}&type=${type}`).map(
      (favorites: FavoriteModel[]) => {        
        return (favorites.length == 0) ? false : true;
      }
    ).toPromise();
  }

  public getAllByUser(userId: number, type: FavoriteType): Promise<FavoriteModel[]> {
    return this.http.get(`${this.API_URL}/favorites?_expand=news&userId=${userId}&type=${type}`).map(
      (favorites: FavoriteModel[]) => {        
        return favorites.map(
          (favorite: FavoriteModel) => new FavoriteModel(favorite)
        )}
    ).toPromise();
  }

  public add(favorite: FavoriteModel): Promise<any> {
    return this.http.post(`${this.API_URL}/favorites`, favorite).toPromise();
  }

  public delete(id: number): Promise<any> {    
    return this.http.delete(`${this.API_URL}/favorites/${id}`).toPromise();
  }
}
