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
  private _newsId: number;

  constructor(private activatedRoute: ActivatedRoute, 
    private socialSharing: SocialSharing,
    private newsService: NewsService) { 
    this._newsId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));    
  }

  async shareWhatsApp(id: number) {
    this.socialSharing.shareViaWhatsApp(this._news.title, this._news.image, this._news.link);
  }

  async ngOnInit() {
    this._news = await this.newsService.searchById(this._newsId);
  }

  public get news(): NewsModel {
    return this._news;
  }
}
