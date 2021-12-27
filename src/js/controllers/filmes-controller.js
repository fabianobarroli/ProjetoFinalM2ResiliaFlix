class Controller {
  constructor(valorFilme) {
    this.filme = valorFilme;
  }

  repassaInfo() {
    let model = new Model(this.filme);
    let view = new View();
    
    view.mostraFilme(model.buscaFilme());
  }
}
