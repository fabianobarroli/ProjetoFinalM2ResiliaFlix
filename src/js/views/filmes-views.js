class View {
  mostraFilme(filme) {
    $(".filmeEncontrado").css("display", "flex");
    $(".mostraErro").css("display", "none");

    const poster = filme.getPoster();
    $("#poster").attr("src", poster);

    const titulo = filme.getTitulo();
    $("#tituloFilme").text(titulo);

    const ano = filme.getAno();
    $("#ano").text(ano);

    const duracao = filme.getDuracao();
    $("#duracao").text(duracao);

    const genero = filme.getGenero();
    $("#genero").text(genero);

    const pais = filme.getPais();
    $("#pais").text(pais);

    const diretor = filme.getDiretor();
    $("#diretor").text(diretor);

    const atores = filme.getAtores();
    $("#atores").text(atores);

    const plot = filme.getPlot();
    $("#plot").text(plot);

    const premios = filme.getPremio();
    $("#premios").text(premios);

    const rating = filme.getRating();
    $("#rating").text(rating);

    const idioma = filme.getIdioma();
    $("#idioma").text(idioma);
  }

  mostraErro() {
    $(".mostraErro").css("display", "flex");
    $(".filmeEncontrado").css("display", "none");
  }
}
