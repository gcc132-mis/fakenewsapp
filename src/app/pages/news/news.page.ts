import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/services/news.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  private _lstNews: NewsModel[];
  text = 'Check out the Ionic Academy!';
  url = 'https://ionicacademy.com';

  constructor(private newsService: NewsService,
    private socialSharing: SocialSharing) {
    this._lstNews = this.newsService.getAll();
  }

  async shareWhatsApp(id: number) {
    let news: NewsModel = await this.newsService.searchById(id);

    // Text + Image or URL works
    this.socialSharing.shareViaWhatsApp(news.title, news.image, news.link).then(() => {
      // Sucess
    }).catch((e) => {
      // Error!
    });
  }


  ngOnInit() {
  }

  public updateListNews(event: any) {
    this._lstNews = this.newsService.searchByTitle(event.target.value);
  }

  public get lstNews(): NewsModel[] {
    return this._lstNews;
  }
}
