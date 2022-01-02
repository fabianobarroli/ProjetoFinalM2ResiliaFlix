function trocarTela(){
    $('.btn-continuar-dados-pessoais').click(function(e){
        e.preventDefault()
        $('.dados-pessoais').css({"display": "none"});
        $('.endereco').css({"display": "block"});
    });

    $('.btn-continuar-endereco').click(function(e){
        e.preventDefault()
        $(".endereco").html(`<p>Funcionou</p>`);
    });
}
trocarTela();

function bucarCEP(){
    $('#cep').focusout(function(e){
        e.preventDefault()
        let cep = $("#cep").val();
        console.log(cep);
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            success: function(response){
                console.log(response);
                $("#estado").val(response.uf);
                $("#cidade").val(response.localidade);
                $("#bairro").val(response.bairro);
                $("#rua").val(response.logradouro);
            },
            error: function(error){
                console.error(error);
            }
        });
    });
}
bucarCEP();