class Model{
    constructor(emailController, senhaUm, senhaDois, cep){
        this.email = emailController;
        this.senhaUm = senhaUm;
        this.senhaDois = senhaDois;
        this.cep = cep;
        this.estado = "";
        this.cidade = "";
        this.bairro = "";
        this.rua = "";
        this.erro = "";
    }

    validaEmail(){
        return this.email.indexOf("@") > -1 ? "email válido" : "email inválido";
    }

    validaSenha(){
        return this.senhaUm != this.senhaDois ? "senha inválida" : "senha válida";
    }

    validaCep(){
        const requisicao = new XMLHttpRequest();
        requisicao.open("GET", `https://viacep.com.br/ws/${this.cep}/json/`, false);
        requisicao.onload = ()=> {
            if(requisicao.status == 200){
                const response = JSON.parse(requisicao.response);
                this.pegarInformacoes(response);
            } else {
                console.log(error);
            }
        }
        requisicao.send();
    }
    
    pegarInformacoes(objeto){
        this.estado = objeto.uf;
        this.cidade = objeto.localidade;
        this.bairro = objeto.bairro;
        this.rua = objeto.logradouro;
        this.erro = objeto.erro;
    }
    
    getUf(){
        return this.estado;
    }
    
    getCidade(){
        return this.cidade;
    }

    getBairro(){
        return this.bairro;
    }

    getRua(){
        return this.rua;
    }

    getErro(){
        return this.erro;
    }
}