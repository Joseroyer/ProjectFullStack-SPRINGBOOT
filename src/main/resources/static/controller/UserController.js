// async function gravarUsuario()
// {
//     var data = JSON.stringify(Object.fromEntries(new FormData(forml)));
//     console.log(data);
//     let response = await fetch("/apis/usuario",{headers: {'Accept': 'application/json','Content-Type': 'application/json'}, method: 'POST', body: data});
//     let userData = await response.text();
//     return userData; // não é necessário o await no return
// }
function gravar() {
    const URL = "/apis/usuario";
    var fdados = document.getElementById("forml");
    var jsontext = JSON.stringify(Object.fromEntries(
        new FormData(fdados)));
    fetch(URL, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST', body: jsontext
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            alert("Cadastro com Sucesso!");
        }).catch(function (error) {
            console.error(error);
        });
}

function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    // 
    const URL_TO_FETCH = '/security/autenticar?login=${login}&senha=${senha}';
    let fdados = document.getElementById("fdados");
    var jsontext = JSON.stringify(Object.fromEntries(
        new FormData(fdados)));

    fetch(URL_TO_FETCH, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post', body: jsontext
    })
        .then(response => { if (response.ok) return response.text(); else throw Error("Erro ao Fazer Login!") })
        .then(texto => localStorage.setItem("token", texto))
        .catch(err => alert(err.message))
    event.preventDefault("fdados");
}



