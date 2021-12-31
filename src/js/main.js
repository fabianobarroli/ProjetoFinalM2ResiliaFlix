function apertaBotao() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=O+Paciente+-++O+Caso+Tancredo+Neves&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`
        }
    })
}

function apertaBotao2() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=Real+-+O+Plano+por+tras+da+Historia&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director2").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year2").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language2").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot2").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating2").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released2").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime2").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre2").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`
        }
    })
}

function apertaBotao3() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=Medianeras&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director3").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year3").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language3").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot3").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating3").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released3").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime3").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre3").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`
        }
    })
}

function apertaBotao4() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=De+onde+eu+te+vejo&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director4").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year4").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language4").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot4").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating4").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released4").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime4").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre4").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`
        }
    })
}

function apertaBotao5() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=Hacksaw+Ridge&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director5").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year5").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language5").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot5").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating5").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released5").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime5").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre5").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`
        }
    })
}

function apertaBotao6() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=The+theory+of+everything&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director6").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year6").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language6").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot6").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating6").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released6").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime6").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre6").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`

        }
    })
}

function apertaBotao7() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=Ready+player+one&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director7").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year7").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language7").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot7").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating7").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released7").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime7").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre7").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`
        }
    })
}

function apertaBotao8() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=The+shining&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director8").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year8").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language8").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot8").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating8").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released8").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime8").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre8").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`
        }
    })
}

function apertaBotao9() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=Never+Back+Down&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director9").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year9").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language9").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot9").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating9").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released9").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime9").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre9").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`
        }
    })
}

function apertaBotao10() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=I+am+legend&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director10").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year10").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language10").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot10").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating10").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released10").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime10").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre10").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`
        }

    })
}

function apertaBotao11() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=Modern+Times&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director11").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year11").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language11").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot11").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating11").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released11").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime11").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre11").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`
        }

    })
}

function apertaBotao12() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=bc0308c3&t=The+Pursuit+of+Happyness&plot=full",
        type: "GET",
        success: function (resultado) {
            document.querySelector("#director12").innerHTML = `<p class="font-weight-bold" id="director">Diretor: ${resultado.Director}</p>`
            document.querySelector("#year12").innerHTML = `<p class="font-weight-bold" id="year">Ano: ${resultado.Year}</p>`
            document.querySelector("#language12").innerHTML = `<p class="font-weight-bold" id="language">Linguagem: ${resultado.Language}</p>`
            document.querySelector("#plot12").innerHTML = `<p class="font-weight-bold" id="plot">Sinopse:${resultado.Plot}</p>`
            document.querySelector("#imdbRating12").innerHTML = `<p class="font-weight-bold" id="imdbRating">Avaliação IMDB: ${resultado.imdbRating}</p>`
            document.querySelector("#released12").innerHTML = `<p class="font-weight-bold" id="released">Data de lançamento: ${resultado.Released}</p>`
            document.querySelector("#runtime12").innerHTML = `<p class="font-weight-bold" id="runtime">Tempo de duração: ${resultado.Runtime}</p>`
            document.querySelector("#genre12").innerHTML = `<p class="font-weight-bold" id="genre">Gênero: ${resultado.Genre}</p>`

        }
    })
}
