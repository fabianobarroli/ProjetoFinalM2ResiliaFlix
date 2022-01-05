class View {
  visualiza(objetoFilme) {

    const poster = objetoFilme.getPoster();
    $("#poster").attr("src", poster);

    const titulo = objetoFilme.getTitulo();
    $("#tituloFilme").text(titulo);

    const ano = objetoFilme.getAno();
    $("#ano").text(ano);

    const atores = objetoFilme.getAtores();
    $("#atores").text(atores);

    const diretor = objetoFilme.getDiretor();
    $("#diretor").text(diretor);

    const genero = objetoFilme.getGenero();
    $("#genero").text(genero);

    const plot = objetoFilme.getPlot();
    $("#plot").text(plot);

    const rating = objetoFilme.getRating();
    $("#rating").text(rating);

    const idioma = objetoFilme.getIdioma();
    $("#idioma").text(idioma);

    const pais = objetoFilme.getPais();
    $("#pais").text(pais);

    const premios = objetoFilme.getPremio();
    $("#premios").text(premios);

    const duracao = objetoFilme.getDuracao();
    $("#duracao").text(duracao);
  }
}
