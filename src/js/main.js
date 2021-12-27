$("#btn-pesquisa").click(() => {
  const filme = new Controller($("#pesquisa-filme").val());

  filme.repassaInfo();
});

// button.addEventListener("click", (e) => {
//   e.preventDefault(),
//     $.ajax({
//       url: `http://www.omdbapi.com/?apikey=4c45a71f&t${filme}`,
//       type: "GET",
//       success: function (movie) {
//         $();
//       },
//     });
// });
