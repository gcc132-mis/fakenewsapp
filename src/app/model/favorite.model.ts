export class FavoriteModel {
    private id: number;
    private userId: number;
    private newsId: number;  
    
    public constructor(like: any) {
        Object.assign(this, like);
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
    public get NewsId(): number {
        return this.newsId;
    }
    public set NewsId(newsId: number) {
        this.newsId = newsId;
    }
}