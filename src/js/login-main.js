$("#email").focusout(function (e) {
    e.preventDefault();
    const controler = new Controller($("#email").val());
    controler.validaEmail();
});

$("#botao-continuar").click(function (e) {
    e.preventDefault();
    if(($('#email').val().indexOf("@") > -1) && ($("#exampleInputPassword1").val().length >= 8)){
        window.location.href = "/src/html/inicial.html"
    } else {
        $("#aviso-preenchimento").html(`
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                Preencha todos os campos corretamente!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `); 
    }
});