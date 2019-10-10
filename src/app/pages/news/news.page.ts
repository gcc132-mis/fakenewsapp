import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  lstNews: NewsModel[];

  constructor() {
    this.lstNews = [
      new NewsModel(
        "É montagem vídeo que mostra furacão Dorian sobre as Bahamas",
        10, new Date("09/15/2019 15:00:24"),
        "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/furacao-dorian-bahamas-destaque.jpg"
      ),
      new NewsModel(
        "Polícia Federal não realizou operação contra a Rede Globo em 30 de agosto",
        50, new Date("09/04/2019 19:02:00"),
        "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/printglobopftopo.png"
      ),
      new NewsModel(
        "É falso que Drauzio Varella recomendou suplemento contra dores articulares",
        75,
        new Date("09/02/2019 18:23:00"),
        "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/drauzioreproducao.png"
      )
    ];
  }

  ngOnInit() {}
}
