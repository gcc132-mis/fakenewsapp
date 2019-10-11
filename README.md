# FakeNewsApp
Aplicativo móvel de combate à propagação de notícias falsas - *fake news*. Com este aplicativo, o usuário poderá: 
* *encontrar* as principais notícias falsas divulgadas por meio da Internet, juntamente com os motivos para serem consideradas falsas; 
* *favoritar* notícias de seu interesse, com o intuito de facilitar o acesso posterior a elas; e
* *compartilhar* notícias com outros usuários, por meio do aplicativo WhatsApp.

**Equipe de Desenvolvimento**: Paulo Afonso

**Atores do sistema**:
* *Usuário*: interage com o aplicativo para a realização de tarefas de seu interesse.
* *FakeNews API*: responsável por gerir os dados exibidos no aplicativo (notícias, likes, entre outros).

**Diagrama de casos de uso**:
![Diagrama de casos de uso do aplicativo](https://github.com/gcc132-mis/fakenewsapp/blob/aula4/casos-de-uso-fakenewsapp.png)

**Documentação**:
* [Documento de requisitos](https://github.com/gcc132-mis/fakenewsapp/issues)
* [Protótipo de interface gráfica](https://drive.google.com/open?id=1ghMFP8QrXtzOgCdFpcrkcMbaxhMjoE-jyRng_In7F7c)

**Utilização**:

Clone o repositório atual: 
> git clone https://github.com/gcc132-mis/fakenewsapp.git

Instale os scripts do *framework* Ionic:
> npm install @ionic/app-scripts@latest --save-dev

Clone o repositório da API para autenticação de usuários com JWT:
> git clone https://github.com/techiediaries/fake-api-jwt-json-server.git

Siga o manual de instalação e execução da API para autenticação de usuários com JWT [aqui](https://github.com/techiediaries/fake-api-jwt-json-server).

Entre na pasta do aplicativo e execute a API FakeNewsAPI:
> json-server --watch database.json

Execute o aplicativo:
> ionic serve