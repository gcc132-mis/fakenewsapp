export class NewsModel {
    title: string;
    likes: number;
    publishedAt: Date;
    image: string;

    constructor(news: any) {
        Object.assign(this, news);
    }
}