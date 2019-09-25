import { Injectable } from '@angular/core';
import { NewsModel } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private lstNews: NewsModel[];

  constructor() {
    this.lstNews = [
      new NewsModel({
        id: 1,
        title: "É montagem vídeo que mostra furacão Dorian sobre as Bahamas",
        likes: 10,
        publishedAt: new Date("09/15/2019 15:00:24"),
        image: "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/furacao-dorian-bahamas-destaque.jpg",
        content: "A informação, analisada pela Lupa, é falsa. O vídeo é na verdade uma animação por computador, criada pelo artista digital norte-americano Brent Shavnore. Ele compartilhou a obra em sua conta no Instagram no dia 19 de maio deste ano. Mais de 164 mil pessoas visualizaram o vídeo. Shavnore criou o “furacão” sobre uma foto da cidade de Miami, nos Estados Unidos. Em sua página pessoal, imagens que mostram tempestades e raios sobre cidades ou paisagens são comuns.",
        link: "https://piaui.folha.uol.com.br/lupa/2019/09/04/verificamos-video-furacao-dorian-bahamas/"
      }),
      new NewsModel({
        id: 2,
        title: "Polícia Federal não realizou operação contra a Rede Globo em 30 de agosto",
        likes: 50,
        publishedAt: new Date("09/04/2019 19:02:00"),
        image: "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/printglobopftopo.png",
        content: "A informação analisada pela Lupa é falsa. A Lupa contatou a Divisão de Comunicação Social da Polícia Federal (PF), que disse não ter conhecimento de qualquer operação envolvendo a emissora. “Não chegou ao conhecimento desta DCS qualquer ocorrência nos moldes da descrita na consulta”, diz e-mail enviado pela PF.",
        link: "https://piaui.folha.uol.com.br/lupa/2019/09/03/verificamos-globo-pf/"
      }),
      new NewsModel({
        id: 3,
        title: "É falso que Drauzio Varella recomendou suplemento contra dores articulares",
        likes: 75,
        publishedAt: new Date("09/02/2019 18:23:00"),
        image: "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/drauzioreproducao.png",
        content: "O conteúdo analisado pela Lupa é falso. O doutor Drauzio Varella nunca deu entrevista ao programa Fantástico recomendando um suplemento alimentar para dores nas articulações. “Nunca fiz nem nunca farei propaganda de remédios, muito menos desses que prometem curas sem comprovação científica. Sempre que você vir meu nome associado a algum medicamento tenha certeza: é mentira, propaganda enganosa”, disse Varella, em nota enviada à Lupa.",
        link: "https://piaui.folha.uol.com.br/lupa/2019/09/02/verificamos-drauzio-dores-articulares/"
      })
    ];
  }

  public getAll(): NewsModel[] {
    return this.lstNews;
  }

  public searchById(id: number): NewsModel {
    return this.lstNews.find((news: NewsModel) => {
      return (news.Id == id)
    }
    );
  }

  public searchByTitle(title: string): NewsModel[] {
    title = title.trim().toLowerCase();

    if (title == '') {
      return this.lstNews;
    }

    return this.lstNews.filter((news: NewsModel) => {
      return (news.Title.toLowerCase().includes(title))
    }
    );
  }
}