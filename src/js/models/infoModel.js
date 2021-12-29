class Model {
    constructor() {
        this._imagem = ""
        this._titulo = ""
        this._diretor = ""
        this._ano = ""
        this._data = ""
        this._tempo = ""
        this._genero = ""
        this._sinopse = ""
        this._avaliacao = ""
        this._escritor = ""
    }

}

$.ajax({
    url:"http://www.omdbapi.com/?apikey=bc0308c3&t=O+Paciente+-++O+Caso+Tancredo+Neves&plot=full",
    type: "GET",
    success: function (resultado) {
        this._imagem = resultado.Poster
        this._titulo = resultado.Title
        this._diretor = resultado.Director
    }
})










// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=bc0308c3&t=O+Paciente+-++O+Caso+Tancredo+Neves&plot=full",
//     type: "GET",
//     success: function (resultado) {
//         document.querySelector("#imgFilme").src = resultado.Poster
//         document.querySelector(".teste1").innerHTML = resultado.Title
//         document.querySelector(".teste2").innerHTML = `Diretor: ${resultado.Director}`
//         document.querySelector(".teste1").innerHTML = `Ano: ${resultado.Year}`
//         document.querySelector("#").innerHTML = `Data de Lançamento: ${resultado.Released}`
//         document.querySelector("#").innerHTML = `Tempo de duração: ${resultado.Runtime}`
//         document.querySelector("#").innerHTML = `Gênero: ${resultado.Genre}`
//         document.querySelector("#").innerHTML = `Escritor: ${resultado.Writer}`
//         document.querySelector("#").innerHTML = `Sinopse: ${resultado.Plot}`
//         document.querySelector("#").innerHTML = `Avaliação IMDB: ${resultado.imdbRating}`
//     }
// })
// })