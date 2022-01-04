class Controller{
    constructor(email, senhaUm, senhaDois, cep){
        this.email = email;
        this.senhaUm = senhaUm;
        this.senhaDois = senhaDois;
        this.cep = cep;
    }

    repassaEmail(){
        let model = new Model(this.email);
        let view = new View();
        view.mostraValidaEmail(model.validaEmail());
    }

    repassaSenha(){
        let model = new Model(this.email, this.senhaUm, this.senhaDois);
        let view = new View();
        view.mostraValidaSenha(model.validaSenha());
    }

    repassaCep(){
        console.log("Controller "+this.cep);
        let model = new Model(this.email, this.senhaUm, this.senhaDois, this.cep);
        model.validaCep();
        let view = new View();
        if(model.getErro() == true){
            view.mostraErro();
        } else{
            view.mostraValidaCep(model);
        }
    }
}