export class NewsModel {    
    id: number;
    title: string;
    likes: number;
    publishedAt: Date;
    image: string;
    content: string;
    link: string; 

    public constructor(data: any) {
        Object.assign(this, data);
    }
}
