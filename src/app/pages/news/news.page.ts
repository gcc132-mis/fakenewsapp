import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  private _lstNews: NewsModel[];

  constructor(private newsService: NewsService) {
    this._lstNews = [];
  }

  async ngOnInit() {
    this._lstNews = await this.newsService.getAll();
  }

  public async updateListNews(event: any) {
    this._lstNews = await this.newsService.searchByTitle(event.target.value);
  }

  public get lstNews(): NewsModel[] {
    return this._lstNews;
  }
}
