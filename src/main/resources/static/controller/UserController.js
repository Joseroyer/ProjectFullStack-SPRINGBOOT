async function gravarUsuario()
{
    var data = JSON.stringify(Object.fromEntries(new FormData(form)));
    let response = await fetch("/apis/usuario",{headers: {'Accept': 'application/json','Content-Type': 'application/json'}, method: 'POST', body: data});
    let userData = await response.text();
    return userData; // não é necessário o await no return
}

function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    const URL_TO_FETCH = '/security/autenticar?login=${login}&senha=${senha}';
    const data = new URLSearchParams();
    for (const pair of new FormData(document.getElementById('fdados'))) {
        data.append(pair[0], pair[1]);
    }

    fetch(URL_TO_FETCH, { method: 'post', body: senha })
        .then(response => { if (response.ok) return response.text(); else throw Error("Erro ao Fazer Login!") })
        .then(texto => localStorage.setItem("token", texto))
        .catch(err => alert(err.message))
    event.preventDefault("fdados");
}



// async function gravarUsuario() {
//     var data = JSON.stringify(Object.fromEntries(new FormData(form)));
//     let response = await fetch("/api/usuario",{headers: {'Accept': 'application/json','Content-Type': 'application/json'}, method: 'POST', body: data});
//     let userData = await response.text();
//     return userData; // não é necessário o await no return
// }


