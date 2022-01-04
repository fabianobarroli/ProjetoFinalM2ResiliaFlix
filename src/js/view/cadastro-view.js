class View{
    mostraValidaEmail(emailValidado){
        if(emailValidado == "email válido"){
            $('#emailHelp').html('Email válido <i class="fas fa-check"></i>');
            $('#emailHelp').css({"color": "#04d976"});
        } else {
            $('#emailHelp').html('Email inválido <i class="fas fa-times"></i>');
            $('#emailHelp').css({"color": "red"});
        }
    }

    mostraValidaSenha(senhasValidadas){
        if(senhasValidadas == "senha inválida"){
            $('.validaSenha').html('Senha inválida <i class="fas fa-times"></i>');
            $('.validaSenha').css({"color": "red"});
        } else {
            $('.validaSenha').html('Senha válida <i class="fas fa-check"></i>');
            $('.validaSenha').css({"color": "#04d976"});
        }
    }

    mostraValidaCep(endereco){
        $("#estado").val(endereco.getUf());
        $("#cidade").val(endereco.getCidade());
        $("#bairro").val(endereco.getBairro());
        $("#rua").val(endereco.getRua());
        $("#textCep").html('CEP válido <i class="fas fa-check"></i>');
        $('#textCep').css({"color": "#04d976"});
    }

    mostraErro(){
        $("#textCep").html('CEP inválido <i class="fas fa-times"></i>');
        $('#textCep').css({"color": "red"});
    }
}