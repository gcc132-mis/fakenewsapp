export class NewsModel {
    private id: number;
    private title: string;
    private likes: number;
    private publishedAt: Date;
    private image: string;
    private content: string;
    private link: string;    

    public constructor(news: any) {
        Object.assign(this, news);
    }

    // Getters and setters
    public get Id(): number {
        return this.id;
    }
    public set Id(id: number) {
        this.id = id;
    }
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
    public get Content(): string {
        return this.content;
    }
    public set Content(content: string) {
        this.content = content;
    }  
    public get Link(): string {
        return this.link;
    }
    public set Link(link: string) {
        this.link = link;
    }  
}
