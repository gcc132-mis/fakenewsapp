import { NewsModel } from './news.model';

export class FavoriteModel {
    private id: number;
    private userId: number;
    private news: NewsModel;  
    
    public constructor(favorite: any) {
        Object.assign(this, favorite);
    }

    // Getters and setters
    public get Id(): number {
        return this.id;
    }
    public set Id(id: number) {
        this.id = id;
    }
    public get UserId(): number {
        return this.userId;
    }
    public set UserId(userId: number) {
        this.userId = userId;
    }
    public get News(): NewsModel {
        return this.news;
    }
    public set News(news: NewsModel) {
        this.news = news;
    }
}