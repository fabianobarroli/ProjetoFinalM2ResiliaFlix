// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=bc0308c3&t=O+Paciente+-++O+Caso+Tancredo+Neves&plot=full",
//     type: "GET",
//     success: function (resultado) {
//         document.querySelector("#director").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
//         document.querySelector("#year").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
//         document.querySelector("#language").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
//         document.querySelector("#plot").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
//         document.querySelector("#imdbRating").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
//         document.querySelector("#released").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
//         document.querySelector("#runtime").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
//         document.querySelector("#genre").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`
//     }
// })