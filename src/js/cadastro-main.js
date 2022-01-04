//Validação
$('#email').focusout(function(e){
    e.preventDefault();
    let controller = new Controller($('#email').val()); //Instaciando controller
    controller.repassaEmail();
});

$('#senhaDois').focusout(function(e){
    e.preventDefault();
    const senhaUm = $('#senhaUm').val();
    const senhaDois = $('#senhaDois').val();
    let controller = new Controller(email, senhaUm, senhaDois);
    controller.repassaSenha();
});

function trocarTela(){
    $('.btn-continuar-dados-pessoais').click(function(e){
        e.preventDefault();
        if(($('#nome').val() != "") && ($('#sobrenome').val() != "") && ($('#email').val().indexOf("@") > -1) && ($('#rg').val().length >= 9) && ($('#senhaUm').val() == $('#senhaDois').val()) && ($('#senhaDois').val() != "") && ($('#senhaUm').val().length >= 8)){
            $('.dados-pessoais').css({"display": "none"});
            $('.endereco').css({"display": "block"});
        } else {
            $("#aviso-preenchimento").html(`
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                Preencha todos os campos corretamente!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `);
        }
    });

    $('.btn-continuar-endereco').click(function(e){
        e.preventDefault();
        if(($('#cep').val() != "") && ($('#estado').val() != "") && ($('#cep').val().length == 8) && ($('#cidade').val() != "") && ($('#bairro').val() != "") && ($('#rua').val() != "")){
            $(".cadastro").html(`
                <div class="alert alert-success teste" role="alert">
                    <h4 class="alert-heading">Cadastro efetuado!</h4>
                    <p>Isso aí, você conseguiu concluir o seu cadastro e agora tem acesso a todos os filmes do <strong>Randomflix</strong>. Te desejo um bom divertimento em nossa plataforma. &#10024;</p>
                    <hr>
                    <p class="mb-0">Não esqueça de confirmar seu <strong>e-mail</strong> e qualquer dúvida ou problema ligue para o nosso <strong>SAC 0800 7877 0200.</strong></p>
                </div>
                <button type="button" class="btn btn-success teste">Ir para página de Login</button>`
            );
        } else {
            $("#aviso-preenchimento-endereco").html(`
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                Preencha todos os campos corretamente! Certifique-se do CEP ter 8 dígitos.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `); 
        }
    });
}
trocarTela();

function bucarCEP(){
    $('#cep').focusout(function(e){
        e.preventDefault();
        const cep = $('#cep').val();
        console.log("main "+cep);
        let controller = new Controller(email, senhaUm, senhaDois, cep);
        controller.repassaCep();
    });
}
bucarCEP();