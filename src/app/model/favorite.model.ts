import { NewsModel } from './news.model';

export class FavoriteModel {
    id: number;
    userId: number;
    news: NewsModel;  
    
    public constructor(favorite: any) {
        Object.assign(this, favorite);
    }
}