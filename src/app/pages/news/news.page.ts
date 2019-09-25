import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  private lstNews: NewsModel[];

  constructor() {}

  ngOnInit() {
    this.lstNews = [
      new NewsModel({
        title: "É montagem vídeo que mostra furacão Dorian sobre as Bahamas",
        likes: 10,
        publishedAt: new Date("09/15/2019 15:00:24"),
        image: "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/furacao-dorian-bahamas-destaque.jpg"
      }),
      new NewsModel({
        title: "Polícia Federal não realizou operação contra a Rede Globo em 30 de agosto",
        likes: 50,
        publishedAt: new Date("09/04/2019 19:02:00"),
        image: "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/printglobopftopo.png"
      }),
      new NewsModel({
        title: "É falso que Drauzio Varella recomendou suplemento contra dores articulares",
        likes: 75,
        publishedAt: new Date("09/02/2019 18:23:00"),
        image: "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/drauzioreproducao.png"
      })
    ];
  }

  public get LstNews(): NewsModel[] {
    return this.lstNews;
  }

}
