class Model {
  constructor(valorFilme) {
    this.filme = valorFilme;
  }

  async buscaFilme() {
    let chave = "4c45a71f";
    let url = `http://www.omdbapi.com/?apikey=${chave}&t=${this.filme}`;
    let reqFilme = await fetch(url).then((response) => response.json());
    return reqFilme;

    // $.ajax({
    //   url: `http://www.omdbapi.com/?apikey=4c45a71f&t=${this.filme}`,
    //   type: "GET",
    //   success: function (filme) {
    //     console.log(filme);
    //     return filme;
    //   },
    // });
  }
}
