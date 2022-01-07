$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=O+Paciente+-++O+Caso+Tancredo+Neves&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo1").text(resultado.Title);
    $(".img1").attr("src", resultado.Poster);
  },
});

$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=Real+-+O+Plano+por+tras+da+Historia&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo2").text(resultado.Title);
    $(".img2").attr("src", resultado.Poster);
  },
});

$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=SideWalls&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo3").text(resultado.Title);
    $(".img3").attr("src", resultado.Poster);
  },
});

$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=De+onde+eu+te+vejo&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo4").text(resultado.Title);
    $(".img4").attr("src", resultado.Poster);
  },
});

$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=Hacksaw+Ridge&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo5").text(resultado.Title);
    $(".img5").attr("src", resultado.Poster);
  },
});

$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=The+theory+of+everything&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo6").text(resultado.Title);
    $(".img6").attr("src", resultado.Poster);
  },
});

$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=Ready+player+one&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo7").text(resultado.Title);
    $(".img7").attr("src", resultado.Poster);
  },
});

$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=The+shining&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo8").text(resultado.Title);
    $(".img8").attr("src", resultado.Poster);
  },
});

$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=Never+Back+Down&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo9").text(resultado.Title);
    $(".img9").attr("src", resultado.Poster);
  },
});

$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=I+am+legend&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo10").text(resultado.Title);
    $(".img10").attr("src", resultado.Poster);
  },
});

$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=Modern+Times&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo11").text(resultado.Title);
    $(".img11").attr("src", resultado.Poster);
  },
});

$.ajax({
  url: "//www.omdbapi.com/?apikey=bc0308c3&t=The+Pursuit+of+Happyness&plot=full",
  type: "GET",
  success: function (resultado) {
    $(".titulo12").text(resultado.Title);
    $(".img12").attr("src", resultado.Poster);
  },
});
