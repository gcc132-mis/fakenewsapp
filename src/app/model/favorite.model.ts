import { NewsModel } from './news.model';
import { FavoriteType } from './favorite-type.model';

export class FavoriteModel {    

    id: number;
    userId: number;
    newsId: number;  
    favoriteType: FavoriteType;
    
    public constructor(favorite: any) {
        Object.assign(this, favorite);
    }
}