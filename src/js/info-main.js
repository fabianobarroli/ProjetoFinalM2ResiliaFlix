let controler = new Controller();
let filme;
const load = () => {
  let tituloFilme = localStorage.getItem("tituloFilme");
  filme = tituloFilme;
  controler.chamaRequisicao(tituloFilme);
};
window.onload = () => {
  load();
};

$("#voltar").click(() => {
  window.location.href = "/src/html/inicial.html";
});
