import { Injectable } from '@angular/core';
import { NewsModel } from '../model/news.model';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(public http: HttpClient) { }

  getAll(): Promise<NewsModel[]> {
    return this.http.get(`${API_URL}/news`).map(
      (itens: NewsModel[]) => {
        return itens.map(
          (item: NewsModel) => {
            return new NewsModel(
              item.id, item.title, item.likes, item.publishedAt,
              item.image, item.content, item.link);
          }
        )
      }
    ).toPromise();
  }

  searchById(id: number): Promise<NewsModel> {
    return this.http.get(`${API_URL}/news/${id}`).map(
      (item: NewsModel) => {
        return new NewsModel(
          item.id, item.title, item.likes, item.publishedAt,
          item.image, item.content, item.link);
      }
    ).toPromise();
  }

  searchByTitle(title: string): Promise<NewsModel[]> {
    title = title.trim().toLowerCase();

    if (title == '') {
      return this.getAll();
    }

    return this.http.get(`${API_URL}/news?q=${title}`).map(
      (itens: NewsModel[]) => {
        return itens.map(
          (item: NewsModel) => {
            return new NewsModel(
              item.id, item.title, item.likes, item.publishedAt,
              item.image, item.content, item.link);
          }
        )
      }
    ).toPromise();
  }

  update(news: NewsModel) {
    return this.http.put(`${API_URL}/news/${news.id}`, news).map(
      (item: NewsModel) => {
        return new NewsModel(
          item.id, item.title, item.likes, item.publishedAt,
          item.image, item.content, item.link);
      }
    ).toPromise();
  }
}
