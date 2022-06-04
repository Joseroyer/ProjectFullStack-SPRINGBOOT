//valida o CNPJ digitado
function ValidarCNPJ(cnpj) {
    cnpj = cnpj.value.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length < 14) {
        alert('CNPJ não digitado corretamente ou faltando informação! Digite a forma correta Ex. 66.075.246/0001-30');
        return false;
    }

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
        alert('CNPJ Inválido! Digite a forma correta Ex. 66.075.246/0001-30');
        return false
    }
    return true;
}


function enviarform1() {
    org = document.querySelector("#txText");
    tel = document.querySelector("#txTelefone").value;
    email = document.querySelector("#txEmail");
    rep = document.querySelector("#txRep");
    flag1 = false; flag2 = false; flag3 = false; flag4 = false;

    // NOME DA ORGANIZAÇÃO
    if (org.value.length < 2) {
        org.value = "";
        alert('Nome da Organização precisa conter no minimo 2 caracteres!');
        org.focus();
    }
    else flag1 = true;

    // EMAIL
    var atpos = email.value.indexOf("@");
    var dotpos = email.value.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        email.value = "";
        alert('Preencha um E-MAIL correto!');
        email.focus();

    } else flag2 = true

    // TELEFONE
    if (!validPhone(tel)) {
        alert('Digite o Telefone Corretamente!');
        tel.focus();
    }else flag3=true;

    // REPRESENTANTE
    if (rep.value.length < 8) {
        rep.value = "";
        alert('Nome do REPRESENTANTE precisa conter no minimo 8 caracteres!');
        rep.focus();
        
    }else flag4 = true;

    if (flag1 == true && flag2 == true && flag3 == true && flag4 == true)
    {
        alert('Formulário Enviado com Suceso!');
        org.value = "";
        email.value = "";
        document.querySelector("#txTelefone").value="";
        rep.value = "";
        document.querySelector("#txCNPJ").value="";
    }
        
}

function validPhone(phone) {
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    return regex.test(phone);
}

function validaJogador()
{
    var jogador=document.querySelector("#tx_Nome");
    if(jogador.value.length < 8)
    {
        jogador.value="";
        alert('O Nome do Jogador precisa conter no minimo 8 caracteres!')
        
    }

}

// function validaNick()
// {
//     var nick=document.querySelector("#tx_Nick");
//     if(nick.value.length < 2)
//     {
//         nick.value="";
//         alert('O NickName precisa conter no minimo 2 caracteres!')
//     }
    
// }


