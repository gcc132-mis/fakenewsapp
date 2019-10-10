export class NewsModel {
    constructor(
        public title: string,
        public likes: number,
        public publishedAt: Date,
        public image: string,
    ) {}
} 