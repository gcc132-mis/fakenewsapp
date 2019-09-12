import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  private _news: NewsModel;

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService) { 
    let newsid: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this._news = this.newsService.searchById(newsid);
  }

  ngOnInit() {
  }

  public get news(): NewsModel {
    return this._news;
  }
}
