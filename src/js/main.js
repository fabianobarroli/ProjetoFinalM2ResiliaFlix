$("#btn-pesquisa").click((e) => {
  e.preventDefault();
  const filme = new Controller($("#pesquisa-filme").val());
  filme.repassaInfo();
});

