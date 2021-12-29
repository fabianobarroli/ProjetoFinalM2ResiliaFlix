class Controller {
  constructor(valInput) {
    this.valInput = valInput;
  }

  validaEmail() {
    let model = new Model(this.valInput);

    let view = new View();
    view.apareceNaTela(model.aprovaEmail());
  }
}
