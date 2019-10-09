import { NewsModel } from './news.model';
import { FavoriteTypeModel } from './favorite-type.model';
import { UserModel } from './user.model';

export class FavoriteModel {    
    id: number;
    user: UserModel;
    news: NewsModel;  
    favoriteType: FavoriteTypeModel;
    
    public constructor(id: number, user: UserModel, news: NewsModel, favoriteType: FavoriteTypeModel) {
        this.id = id;
        this.user = user;
        this.news = news;
        this.favoriteType = favoriteType;
    }
}