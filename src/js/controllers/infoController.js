class Controller {
    static carregarFilme(nome) {
        let filme = new Model()

        filme.fazRequisicao(nome, () => {
            if (filme._titulo == undefined && filme._sinopse == undefined) {
                View.naoExiste(nome)
            } else {
                View.addElemento(filme)
            }
        })
    }
}