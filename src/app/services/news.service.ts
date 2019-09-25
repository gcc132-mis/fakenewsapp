import { Injectable } from '@angular/core';
import { NewsModel } from '../model/news.model';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private API_URL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getAll(): Promise<NewsModel[]> {
    return this.http.get(`${this.API_URL}/news`).map(
      (itens: NewsModel[]) => {
        return itens.map(
          (news: NewsModel) => new NewsModel(news)
        )  
      }
    ).toPromise();
  }

  public searchById(id: number): Promise<NewsModel> {
    return this.http.get(`${this.API_URL}/news/${id}`).map(
      (news: NewsModel) => {
        return new NewsModel(news)
      }
    ).toPromise();
  }

  public searchByTitle(title: string): Promise<NewsModel[]> {
    title = title.trim().toLowerCase();

    if (title == '') {
      return this.getAll();
    }

    return this.http.get(`${this.API_URL}/news?q=${title}`).map(
      (itens: NewsModel[]) => {
        return itens.map(
          (news: NewsModel) => new NewsModel(news)
        )  
      }
    ).toPromise();
  }
}
