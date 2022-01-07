class Model {
  constructor(valorFilme) {
    this.filme = valorFilme;
    this.title = "Title";
    this.year = "Year";
    this.actors = "Actor";
    this.director = "Director";
    this.plot = "Plot";
    this.genre = "Genre";
    this.awards = "Awards";
    this.poster = "Poster";
    this.rating = "Ratings";
    this.language = "Language";
    this.country = "Country";
    this.runtime = "Runtime";
    this.response = " ";
  }

  buscaFilme() {
    const requisicao = new XMLHttpRequest();
    // let chave = "4c45a71f";
    // requisicao.onload = () => {
    //   if (requisicao.status == 200) {
    //     const response = JSON.parse(requisicao.responseText);
    //     console.log(response);
    //     this._atualizaFilmes(response);
    //   } else {
    //     throw new Error("Sistema fora do ar");
    //   }
    // };
    requisicao.addEventListener("load", () => {
      if (requisicao.status == 200 && requisicao.readyState == 4) {
        const dados = JSON.parse(requisicao.responseText);
        this._atualizaFilmes(dados);
      }
    });
    requisicao.open(
      "GET",
      `//www.omdbapi.com/?t=${this.filme}&apikey=$4c45a71f`,
      false
      );
    requisicao.send();
  }

  _atualizaFilmes(objeto) {
    this.title = objeto.Title;
    this.year = objeto.Year;
    this.actors = objeto.Actors;
    this.director = objeto.Director;
    this.plot = objeto.Plot;
    this.genre = objeto.Genre;
    this.awards = objeto.Awards;
    this.poster = objeto.Poster;
    this.rating = objeto.Ratings[1].Value;
    this.language = objeto.Language;
    this.country = objeto.Country;
    this.runtime = objeto.Runtime;
    this.response = objeto.Response;
  }

  getTitulo() {
    return this.title;
  }

  getAno() {
    return this.year;
  }

  getAtores() {
    return this.actors;
  }

  getDiretor() {
    return this.director;
  }

  getPlot() {
    return this.plot;
  }

  getGenero() {
    return this.genre;
  }

  getPremio() {
    return this.awards;
  }

  getPoster() {
    return this.poster;
  }

  getRating() {
    return this.rating;
  }

  getIdioma() {
    return this.language;
  }

  getPais() {
    return this.country;
  }

  getDuracao() {
    return this.runtime;
  }

  getResponse() {
    return this.response;
  }
}
