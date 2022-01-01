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

// visualiza(objetoFilme) {
//     console.log("ta funcionando")
//     document.querySelector("#director").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${objetoFilme.Director}</p>`
//     document.querySelector("#year").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${objetoFilme.Year}</p>`
//     document.querySelector("#language").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${objetoFilme.Language}</p>`
//     document.querySelector("#plot").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${objetoFilme.Plot}</p>`
//     document.querySelector("#imdbRating").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${objetoFilme.imdbRating}</p>`
//     document.querySelector("#released").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${objetoFilme.Released}</p>`
//     document.querySelector("#runtime").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${objetoFilme.Runtime}</p>`
//     document.querySelector("#genre").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${objetoFilme.Genre}</p>`
// }