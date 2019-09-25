export class NewsModel {
    id: number;
    title: string;
    likes: number;
    publishedAt: Date;
    image: string;
    content: string;
    link: string;    

    public constructor(news: any) {
        Object.assign(this, news);
    }
}
