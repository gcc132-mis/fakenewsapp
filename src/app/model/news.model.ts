export class NewsModel {    
    id: number;
    title: string;
    likes: number;
    publishedAt: Date;
    image: string;
    content: string;
    link: string; 

    public constructor(id: number, title: string, likes: number, publishedAt: Date, image: string, content: string, link: string) {
        this.id = id;
        this.title = title;
        this.likes = likes;
        this.publishedAt = publishedAt;
        this.image = image;
        this.content = content;
        this.link = link;
    }
}
