class Model {
    constructor() {
        this._imagens = ""
        this._titulos = ""
    }

}

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=O%20Paciente:%20O%20Caso%20Tancredo%20Neves&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo1").text(resultado.Title)
            $(".img1").attr("src", resultado.Poster)
         }
        
    })

})

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=Real%3A+O+plano+por+tras+da+historia&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo2").text(resultado.Title)
            $(".img2").attr("src", resultado.Poster)
         }
        
    })

})

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=Medianeras&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo3").text(resultado.Title)
            $(".img3").attr("src", "https://images.adsttc.com/media/images/50eb/3550/b3fc/4b25/d500/0085/large_jpg/medianeras-cartel.jpg?1361401773")
         }
        
    })

})

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=De+onde+eu+te+vejo&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo4").text(resultado.Title)
            $(".img4").attr("src", resultado.Poster)
         }
        
    })

})

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=Hacksaw+Ridge&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo5").text(resultado.Title)
            $(".img5").attr("src", resultado.Poster)
         }
        
    })

})

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=The+Theory+of+Everything&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo6").text(resultado.Title)
            $(".img6").attr("src", resultado.Poster)
         }
        
    })

})

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=Ready+player+one&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo7").text(resultado.Title)
            $(".img7").attr("src", resultado.Poster)
         }
        
    })

})

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=The+shining&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo8").text(resultado.Title)
            $(".img8").attr("src", resultado.Poster)
         }
        
    })

})

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=never+back+down&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo9").text(resultado.Title)
            $(".img9").attr("src", resultado.Poster)
         }
        
    })

})

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=I+am+legend&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo10").text(resultado.Title)
            $(".img10").attr("src", resultado.Poster)
         }
        
    })

})

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=Modern+Times&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo11").text(resultado.Title)
            $(".img11").attr("src", resultado.Poster)
         }
        
    })

})

$(".botao").click(function () {
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=bc0308c3&t=The+Pursuit+of+Happyness&plot=full",
        type: "GET",
        success: function (resultado) {
            $(".titulo12").text(resultado.Title)
            $(".img12").attr("src", resultado.Poster)
         }
        
    })

})