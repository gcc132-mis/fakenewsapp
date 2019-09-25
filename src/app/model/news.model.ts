export class NewsModel {
    private title: string;
    private likes: number;
    private publishedAt: Date;
    private image: string;

    public constructor(news: any) {
        Object.assign(this, news);
    }

    // Getters and setters
    public get Title(): string {
        return this.title;
    }
    public set Title(title: string) {
        this.title = title;
    }    
    public get Likes(): number {
        return this.likes;
    }
    public set Likes(likes: number) {
        this.likes = likes;
    }  
    public get PublishedAt(): Date {
        return this.publishedAt;
    }
    public set PublishedAt(publishedAt: Date) {
        this.publishedAt = publishedAt;
    } 
    public get Image(): string {
        return this.image;
    }
    public set Image(image: string) {
        this.image = image;
    }  
}