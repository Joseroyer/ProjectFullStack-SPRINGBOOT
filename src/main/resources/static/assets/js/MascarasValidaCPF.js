function getMoney() {
   var vStr = event.target.value;
   event.target.value = parseInt(vStr.replace(/[\D]+/g, ''));
}

/* OU para receber uma string formatada e converter pra inteiro e usar em cálculos, ou para gravar no banco de dados,... 
function getMoney( str ){
      return parseInt( str.replace(/[\D]+/g,'') );
}
*/

function mMoeda() {
   // Para pegar o objeto que chamou o evento 
   //var v = (event.target.value).substring(3); //extrai os 3 primeiros caracteres relativos ao 'R$ '
   var v = event.target.value;

   //Faz uma série de substituições nas Expressões Regulares que podem gerar valores monetários
   v = v.replace(/\D/g, "");
   v = v.replace(/^0+/g, "");
   v = v.replace(/(\d{1})(\d{13})$/, "$1.$2");
   v = v.replace(/(\d{1})(\d{10})$/, "$1.$2");
   v = v.replace(/(\d{1})(\d{7})$/, "$1.$2");
   v = v.replace(/(\d{1})(\d{4})$/, "$1.$2");
   v = v.replace(/(\d{1})(\d{1,1})$/, "$1,$2");
   // Para retornar os valores que estão sendo digitados com a formatação ao elemento que chamou a função
   event.target.value = "R$ " + v;
   //   event.target.value = v;
}

function formatReal() {
   var tmp = event.target.value + '';
   tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
   if (tmp.length > 6)
      tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

   event.target.value = tmp;
}

function mCpf() {
   var cpf = event.target.value;
   cpf = cpf.replace(/\D/g, "")
   cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
   cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
   cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
   event.target.value = cpf;
}

function mTel() {
   var tel = event.target.value;
   tel = tel.replace(/\D/g, "")
   tel = tel.replace(/^(\d)/, "($1")
   tel = tel.replace(/(.{3})(\d)/, "$1)$2")
   if (tel.length == 9) {
      tel = tel.replace(/(.{1})$/, "-$1")
   } else if (tel.length == 10) {
      tel = tel.replace(/(.{2})$/, "-$1")
   } else if (tel.length == 11) {
      tel = tel.replace(/(.{3})$/, "-$1")
   } else if (tel.length == 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
   } else if (tel.length > 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
   }
   event.target.value = tel;
}


function mCEP() {
   var cep = event.target.value;
   cep = cep.replace(/\D/g, "")
   cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
   cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2")
   event.target.value = cep;
}
/*
fonte: https://github.com/FlavioALeal/MascaraJS

Parametros da função mascara
A função máscara tem 3 parametros.

1º - o Modelo da máscara utilizado no input, como explicado acima, informe sempre a máscara entre aspas simples ou aspas duplas, parametro obrigatório
2º - não mude, sempre deve ser this, parametro obrigatório
3º - não mude, sempre deve ser event, parametro obrigatório
*/
function mascara(m, t, e) {
   var cursor = t.selectionStart;
   var texto = t.value;
   texto = texto.replace(/\D/g, '');
   var l = texto.length;
   var lm = m.length;
   if (window.event) {
      id = e.keyCode;
   } else if (e.which) {
      id = e.which;
   }
   cursorfixo = false;
   if (cursor < l) cursorfixo = true;
   var livre = false;
   if (id == 16 || id == 19 || (id >= 33 && id <= 40)) livre = true;
   ii = 0;
   mm = 0;
   if (!livre) {
      if (id != 8) {
         t.value = "";
         j = 0;
         for (i = 0; i < lm; i++) {
            if (m.substr(i, 1) == "#") {
               t.value += texto.substr(j, 1);
               j++;
            } else if (m.substr(i, 1) != "#") {
               t.value += m.substr(i, 1);
            }
            if (id != 8 && !cursorfixo) cursor++;
            if ((j) == l + 1) break;

         }
      }
   }
   if (cursorfixo && !livre) cursor--;
   t.setSelectionRange(cursor, cursor);
}


function enviardados() {
   flag1 = false; flag2 = false; flag3 = false; flag4 = false; flag5 = false; flag6 = false;
   if (!validarNome())
      flag1 = false;
   else
      flag1 = true;

   if (!validaData(document.querySelector("#iData")))
      flag2 = false;
   else
      flag2 = true;

   if (!validarEmail())
      flag3 = false;
   else
      flag3 = true;
   if (!validaCelular(document.querySelector("#iCelular")))
      flag4 = false;
   else
      flag4 = true;
   if (!ValidaCep(document.querySelector("#iCep")))
      flag5 = false;
   else
      flag5 = true;

   if (!validarEndereco())
      flag6 = false;
   else
      flag6 = true;
   if (flag1 == true && flag2 == true && flag3 == true && flag4 == true && flag5 == true && flag6 == true) {
      alert('Dados Enviado com Sucesso!!');
      document.location.reload(true);
   }

}

function validarNome() {
   nome = document.querySelector("#iNome");
   if (nome.value.length < 8) {
      nome.value = "";
      alert('Seu NOME precisa conter no minimo  8 caracteres!');
      nome.style.border = "solid 2px red";
      return false;
   }
   return true;
}

function validarEmail() {
   email = document.querySelector("#iEmail");
   var atpos = email.value.indexOf("@");
   var dotpos = email.value.lastIndexOf(".");
   if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      email.value = "";
      alert('Preencha um E-MAIL correto!');
      email.style.border = "solid 2px red";
      return false;
   }
   return true
}

function validarEndereco() {
   rua = document.querySelector("#iRua");
   numero = document.querySelector("#iNumero");
   bairro = document.querySelector("#iBairro");
   var correto = true;
   if (rua.value.length < 3) {
      rua.value = "";
      alert("Preencha o nome da RUA corretamente!");
      rua.style.border = "solid 2px red";
      correto = false;
   }
   if (numero.value.length < 1) {
      numero.value = "";
      alert("Preencha o NÚMERO corretamente!");
      numero.style.border = "solid 2px red";
      correto = false;
   }
   if (bairro.value.length < 3) {
      bairro.value = "";
      alert("Preencha o nome do BAIRRO corretamente!");
      bairro.style.border = "solid 2px red";
      correto = false;
   }
   return correto;
}

//VALIDAÇÃO
function validaData(data) {
   // exp = date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
   var exp = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;

   if (!exp.test(data.value)) {
      alert('DATA Inválida!');
      data.style.border = "solid 2px red";
      data.value = "";
   }

}
function validaCelular(valor) {
   exp = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
   if (!exp.test(valor.value)) {
      alert('Número de CELULAR Inválido!');
      valor.style.border = "solid 2px red";
      valor.value = "";
   }

}

function validaDat(valor) {
   var date = valor;
   var ardt = new Array;
   var ExpReg = new RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");
   ardt = date.split("/");
   erro = false;
   if (date.search(ExpReg) == -1) {
      erro = true;
   }
   else if (((ardt[1] == 4) || (ardt[1] == 6) || (ardt[1] == 9) || (ardt[1] == 11)) && (ardt[0] > 30))
      erro = true;
   else if (ardt[1] == 2) {
      if ((ardt[0] > 28) && ((ardt[2] % 4) != 0))
         erro = true;
      if ((ardt[0] > 29) && ((ardt[2] % 4) == 0))
         erro = true;
   }
   if (erro) {
      alert("não é uma data válida!!!");
      campo.focus();
      campo.value = "";
      return false;
   }
   return true;
}

function ValidaCep(cep) {
   exp = /\d{2}\.\d{3}\-\d{3}/
   if (!exp.test(cep.value)) {
      alert('Número de CEP inválido!');
      cep.style.border = "solid 2px red";
      cep.values = "";
   }

}
// Validar CPF - Andressa
function validarCPF() {
   var cpf = event.target.value;
   var ok = 1;
   var add;
   if (cpf != "") {
      cpf = cpf.replace(/[^\d]+/g, '');
      if (cpf.length != 11 ||
         cpf == "00000000000" ||
         cpf == "11111111111" ||
         cpf == "22222222222" ||
         cpf == "33333333333" ||
         cpf == "44444444444" ||
         cpf == "55555555555" ||
         cpf == "66666666666" ||
         cpf == "77777777777" ||
         cpf == "88888888888" ||
         cpf == "99999999999")
         ok = 0;
      if (ok == 1) {
         add = 0;
         for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
         rev = 11 - (add % 11);
         if (rev == 10 || rev == 11)
            rev = 0;
         if (rev != parseInt(cpf.charAt(9)))
            ok = 0;
         if (ok == 1) {
            add = 0;
            for (i = 0; i < 10; i++)
               add += parseInt(cpf.charAt(i)) * (11 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
               rev = 0;
            if (rev != parseInt(cpf.charAt(10)))
               ok = 0;
         }
      }
      if (ok == 0) {
         alert("Ops... Ocorreu um problema... CPF inválido!");
         event.target.style.border = "solid 2px red";

         // event.target.focus();
      }
   }
}
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




