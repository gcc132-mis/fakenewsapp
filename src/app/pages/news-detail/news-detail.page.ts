import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/services/news.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FavoritesService } from 'src/app/services/favorite.service';
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
    private favoritesService: FavoritesService) {
  }

  async ngOnInit() {
    this.newsId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userId = 1; // fake userid

    this.currentNews = await this.newsService.searchById(this.newsId);
    this.starId = await this.favoritesService.getFavoriteId(this.userId, this.newsId, FavoriteType.STAR);
    // this.likeId = await this.favoritesService.getIdByUserAndNews(this.userId, this.newsId, FavoriteType.LIKE);
  }

  async shareWhatsApp() {
    const canShare: boolean = await this.socialSharing.canShareVia('whatsapp');
    if (canShare) {
      this.socialSharing.shareViaWhatsApp(this.currentNews.title,
        this.currentNews.image, this.currentNews.link);
    }
  }

  async handleFavorite() {
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
      await this.favoritesService.delete(this.starId);
      this.starId = null;
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
