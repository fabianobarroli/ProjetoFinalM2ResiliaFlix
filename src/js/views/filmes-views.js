class View {
  mostraFilme(filme) {
    const poster = filme.getPoster();
    $("#poster").attr("src", poster);

    const titulo = filme.getTitulo();
    $("#tituloFilme").text(titulo);

    const ano = filme.getAno();
    $("#ano").text(ano);

    const atores = filme.getAtores();
    $("#atores").text(atores);

    const diretor = filme.getDiretor();
    $("#diretor").text(diretor);

    const genero = filme.getGenero();
    $("#genero").text(genero);

    const plot = filme.getPlot();
    $("#plot").text(plot);

    const ratting = filme.getRatting();
    $("#ratting").text(ratting);

    const idioma = filme.getIdioma();
    $("#idioma").text(idioma);

    const pais = filme.getCountry();
    $("#pais").text(pais);

    const duracao = filme.getDuracao();
    $("#duracao").text(duracao);
  }
}
