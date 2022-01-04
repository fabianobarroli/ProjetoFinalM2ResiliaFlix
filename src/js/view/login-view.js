class View {
    apareceNaTela(texto) {
        if(texto == "Email Valido"){
            $('#resposta').html('Email válido <i class="fas fa-check"></i>');
            $('#resposta').css({"color": "#04d976"});
        } else {
            $('#resposta').html('Email inválido <i class="fas fa-times"></i>');
            $('#resposta').css({"color": "red"});
        }
    }
}
