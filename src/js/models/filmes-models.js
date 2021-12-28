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
    this.ratting = "Ratting";
    this.language = "Language";
    this.country = "Country";
    this.runtime = "Runtime";
  }

  buscaFilme() {
    let chave = "4c45a71f";
    const requisicao = new XMLHttpRequest();
    requisicao.open(
      "GET",
      `http://www.omdbapi.com/?apikey=${chave}&t=${this.filme}`,
      false
    );
    requisicao.onload = () => {
      if (requisicao.status == 200) {
        const response = JSON.parse(requisicao.responseText);
        console.log(response);
        this._atualizaFilmes(response);
      }
    };
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
    this.ratting = objeto.Ratting;
    this.language = objeto.Language;
    this.country = objeto.Country;
    this.runtime = objeto.Runtime;
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

  getRatting() {
    return this.ratting;
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
}
