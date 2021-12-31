// function trocarTela(){
//     $('.btn-continuar').click(function(){
//         const container = $(".container");
//         $(container).html(`
//         <div class="row">
//             <div class="col-md-4 mb-3">
//                 <label for="exampleFormControlInputDefault" class="form-label">CEP</label>
//                 <input id="cep" class="form-control" id="exampleFormControlInputDefault" type="text" aria-label="default input example">
//             </div>
//             <div class="col-md-2 mb-3">
//                 <label for="uf">Estado</label>
//                 <select id="uf" class="form-select" aria-label="Default select example">
//                     <option value=""></option>
//                     <option value="AC">Acre</option>
//                     <option value="AL">Alagoas</option>
//                     <option value="AP">Amapá</option>
//                     <option value="AM">Amazonas</option>
//                     <option value="BA">Bahia</option>
//                     <option value="CE">Ceará</option>
//                     <option value="DF">Distrito Federal</option>
//                     <option value="ES">Espírito Santo</option>
//                     <option value="GO">Goiás</option>
//                     <option value="MA">Maranhão</option>
//                     <option value="MT">Mato Grosso</option>
//                     <option value="MS">Mato Grosso do Sul</option>
//                     <option value="MG">Minas Gerais</option>
//                     <option value="PA">Pará</option>
//                     <option value="PB">Paraíba</option>
//                     <option value="PR">Paraná</option>
//                     <option value="PE">Pernambuco</option>
//                     <option value="PI">Piauí</option>
//                     <option value="RJ">Rio de Janeiro</option>
//                     <option value="RN">Rio Grande do Norte</option>
//                     <option value="RS">Rio Grande do Sul</option>
//                     <option value="RO">Rondônia</option>
//                     <option value="RR">Roraima</option>
//                     <option value="SC">Santa Catarina</option>
//                     <option value="SP">São Paulo</option>
//                     <option value="SE">Sergipe</option>
//                     <option value="TO">Tocantins</option>
//                 </select>
//             </div>
//             <div class="col-md-6 mb-3">
//                 <label for="exampleFormControlInputDefault" class="form-label">Cidade</label>
//                 <input id="cidade" class="form-control" id="exampleFormControlInputDefault" type="text" aria-label="default input example">
//             </div>
//         </div>
//         <div class="row">
//             <div class="col-md-4 mb-3">
//                 <label for="exampleFormControlInputDefault" class="form-label">Bairro</label>
//                 <input id="bairro" class="form-control" id="exampleFormControlInputDefault" type="text" aria-label="default input example">
//             </div>
//             <div class="col-md-8 mb-3">
//                 <label for="exampleFormControlInputDefault" class="form-label">Rua</label>
//                 <input id="rua" class="form-control" id="exampleFormControlInputDefault" type="text" aria-label="default input example">
//             </div>
//         </div>
//         <div class="row">
//             <div class="col-md-2 mb-3">
//                 <label for="exampleFormControlInputDefault" class="form-label">Número</label>
//                 <input class="form-control" id="exampleFormControlInputDefault" type="text" aria-label="default input example">
//             </div>
//             <div class="col-md-10 mb-3">
//                 <label for="exampleFormControlInputDefault" class="form-label">Complemento</label>
//                 <input class="form-control" id="exampleFormControlInputDefault" type="text" aria-label="default input example">
//             </div>
//         </div>

// `);
//     });
// }
// trocarTela();

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