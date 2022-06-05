function gravarPiada() {
    const URL = "/apis/piada";
    var fdados = document.getElementById("fdados");
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
            alert("Piada cadastrada com Sucesso!");
        }).catch(function (error) {
            console.error(error);
        });
}

function exibirCat()
{
    fetch("/api/listar-todos")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    function appendData(data) {

        var resp="";
        for (let i=0;i<data.length;i++)
            resp+=`<option value="`+(i+1)+`">`+`${data[i].nome}</option>`;        
        document.getElementById("categoria").innerHTML=resp;
    }
    
}

// async function gravarPiada()
// {
//     let data = JSON.stringify(Object.fromEntries(new FormData(fdados)));
//     data['categoria']=parseInt(data['categoria']);
//     console.log(data);
//     let response = await fetch("/api/piada",{headers: {'Accept': 'application/json','Content-Type': 'application/json'}, method: 'POST', body: data});
//     let userData = await response.text();
//     return userData; // não é necessário o await no return
// }