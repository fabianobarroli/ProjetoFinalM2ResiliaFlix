class Controller {
  constructor(valorFilme) {
    this.filme = valorFilme;
  }

  repassaInfo() {
    let model = new Model(this.filme);
    model.buscaFilme();
    let view = new View();
    view.mostraFilme(model);
  }
}
