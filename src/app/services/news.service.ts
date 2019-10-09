import { Injectable } from '@angular/core';
import { NewsModel } from '../model/news.model';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  API_URL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getAll(): Promise<NewsModel[]> {
    return this.http.get(`${this.API_URL}/news`).map(
      (itens: NewsModel[]) => {
        return itens.map(
          (item: NewsModel) => new NewsModel(item.id, item.title, item.likes, item.publishedAt, item.image, item.content, item.link)
        )
      }
    ).toPromise();
  }

  public searchById(id: number): Promise<NewsModel> {
    return this.http.get(`${this.API_URL}/news/${id}`).map(
      (item: NewsModel) => new NewsModel(item.id, item.title, item.likes, item.publishedAt, item.image, item.content, item.link)
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
          (item: NewsModel) => new NewsModel(item.id, item.title, item.likes, item.publishedAt, item.image, item.content, item.link)
        )
      }
    ).toPromise();
  }

  public update(news: NewsModel) {
    return this.http.put(`${this.API_URL}/news/${news.id}`, news).map(
      (item: NewsModel) => new NewsModel(item.id, item.title, item.likes, item.publishedAt, item.image, item.content, item.link)
    ).toPromise();
  }
}
