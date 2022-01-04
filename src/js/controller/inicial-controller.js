class Controller {

    chamaRequisicao(titulo) {
        const model = new Model(titulo)
        model.buscaFilme()

        const view = new View()
        view.visualiza(model)
    }

}