function appendData(data) {
    var conteudo = document.getElementById("conteudo");
    var titulo = document.getElementById("titulo");
    const dia = new Date().getDay();
    if (dia <= data.length) {
        conteudo.innerHTML = data[dia].texto;
        titulo.innerHTML = "Título: " + data[dia].titulo;
    }
    else {
        titulo.innerHTML = "Ops!"
        conteudo.innerHTML = "Piada Inexistente"
    }
}
function PiadaDoDia() {
    var status;
    fetch("/apis/piada/listar")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}


function appendTabela(data) {

    var table = "";
    table += `<tr><th>Titulo</th><th>Texto</th><th>Curtir</th></tr>`
    for (let i = 0; i < data.length; i++)
        table += `<tr>
            <td>${data[i].titulo}</td>
            <td>${data[i].texto}</td>
            <td> <input onclick='UpdateRanking(${data[i].id})'type="submit"></input></td>
            </tr>`;
    document.getElementById("resultPiad").innerHTML = table;
}

function pesquisar() {
    var filtro = document.getElementById("buscar").value
    fetch("/apis/listar-piadas?filtro=" + filtro)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('Palavra não encontrada ' + err);
        });
}

