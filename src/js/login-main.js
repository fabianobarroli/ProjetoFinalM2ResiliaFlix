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

$(".btn-enviar").click(function (e) {
    e.preventDefault();
    if(($('#email').val().indexOf("@") > -1)){
        $(".formulario").html(`
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Email enviado!</h4>
                <p>Isso aí, seu e-mail foi identificado e enviamos um link de redefinição de senha, basta clicar nele e escolher uma senha nova! &#10024;</p>
                <hr>
                <p class="mb-0">Qualquer dúvida ou problema ligue para o nosso <strong>SAC 0800 7877 0200.</strong></p>
            </div>
            <a type="button" class="btn btn-success" href="/src/html/login.html">Ir para página de Login</a>`
        );
    } else {
        $("#aviso-preenchimento").html(`
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                Preencha o campo do email corretamente!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `); 
    }
});