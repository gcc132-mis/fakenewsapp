import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/services/news.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FavoritesService } from 'src/app/services/favorite.service';
import { AuthService } from 'src/app/services/auth.service';
import { FavoriteModel } from 'src/app/model/favorite.model';
import { FavoriteType } from 'src/app/model/favorite-type.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  currentNews: NewsModel;
  starId: number;
  likeId: number;
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
    this.starId = await this.favoritesService.getIdByUserAndNews(this.userId, this.newsId, FavoriteType.STAR);
    this.likeId = await this.favoritesService.getIdByUserAndNews(this.userId, this.newsId, FavoriteType.LIKE);
  }

  async shareWhatsApp() {
    this.socialSharing.shareViaWhatsApp(this.currentNews.title, 
      this.currentNews.image, this.currentNews.link);
  }

  async addStar() {
    if (!this.starId) {
      let favorite = new FavoriteModel(
        {
          "userId": this.userId,
          "newsId": this.newsId,
          "favoriteType": FavoriteType.STAR
        }
      );
      this.starId = await this.favoritesService.add(favorite);      
    } else {      
      // error message
    }
  }

  async handleLike() {
    if (!this.likeId) {
      let favorite = new FavoriteModel(
        {
          "userId": this.userId,
          "newsId": this.newsId,
          "favoriteType": FavoriteType.LIKE
        }
      );
      this.likeId = await this.favoritesService.add(favorite);
      this.currentNews.likes += 1;      
      
    } else {      
      await this.favoritesService.delete(this.likeId);
      this.likeId = null;

      this.currentNews.likes -= 1;      
    }

    this.currentNews = await this.newsService.update(this.currentNews);
  }
}
