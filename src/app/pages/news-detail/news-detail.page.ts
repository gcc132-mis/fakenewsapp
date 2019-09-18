import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/services/news.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  private _news: NewsModel;

  constructor(private activatedRoute: ActivatedRoute, 
    private newsService: NewsService, private socialSharing: SocialSharing) { 
    let newsid: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this._news = this.newsService.searchById(newsid);
  }

  async shareWhatsApp(id: number) {
    let news: NewsModel = this.newsService.searchById(id);
    this.socialSharing.shareViaWhatsApp(news.title, news.image, news.link);
  }

  ngOnInit() {
  }

  public get news(): NewsModel {
    return this._news;
  }
}
