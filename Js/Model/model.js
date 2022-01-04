class Model {
  constructor(valInput) {
    this.valInput = valInput;
  }
  aprovaEmail() {
    return this.valInput.indexOf("@") > -1 ? "Email Valido" : "Email Invalido";
  }
}
