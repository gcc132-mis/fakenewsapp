import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/services/news.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FavoritesService } from 'src/app/services/favorite.service';
import { AuthService } from 'src/app/services/auth.service';
import { FavoriteModel } from 'src/app/model/favorite.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  currentNews: NewsModel;
  isFavorite: boolean;
  newsId: number;
  userId: number;

  constructor(private activatedRoute: ActivatedRoute, 
    private socialSharing: SocialSharing,
    private newsService: NewsService,
    private favoritesService: FavoritesService,
    private authService: AuthService) {       
  }

  ngOnInit() {}

  async ionViewDidEnter() {
    this.newsId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userId = this.authService.getAuthUserId();

    this.currentNews = await this.newsService.searchById(this.newsId);
    this.isFavorite = await this.favoritesService.isFavorite(this.userId, this.newsId);
  }

  async shareWhatsApp() {
    this.socialSharing.shareViaWhatsApp(this.currentNews.title, 
      this.currentNews.image, this.currentNews.link);
  }

  async addFavorite() {
    if (!this.isFavorite) {
      let favorite = new FavoriteModel(
        {
          "userId": this.userId,
          "newsId": this.newsId 
        }
      );
      this.favoritesService.add(favorite);
      this.isFavorite = true;
    } else {      
      // error message
    }
  }
}
