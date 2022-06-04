let dados = [];


function adicionar() {
    let nome = document.querySelector("#tx_Nome").value;
    let cpf = document.querySelector("#tx_CPF").value;
    let name = document.querySelector("#tx_Nick").value;
    let sid= dados.length+1;

    if (nome!='' && dados.length < 6 && name!='')
    {
        let obj={
            id:parseInt(new Date().getTime()),
            codigo:sid,
            nome:nome,
            cpf:cpf,
            nick:name,
        }
        dados.push(obj);
        document.querySelector("#tx_Nome").value="";
        document.querySelector("#tx_CPF").value="";
        document.querySelector("#tx_Nick").value="";
        montarTabela();
    }
}

function montarTabela(){
    let body= document.querySelector("#tb-body");
    let linhas="";

    for(let i=0; i<dados.length; i++)
    {
        linhas += `<tr>
						  <td><input type="checkbox" data-id="${dados[i].id}"></td>
						  <td>${dados[i].codigo}</td>
                          <td>${dados[i].nome}</td>
                          <td>${dados[i].cpf}</td>
                          <td>${dados[i].nick}</td>
                          <td><a onclick="excluir(${dados[i].id},'${dados[i].nome}',${dados[i].codigo})">&#9746;</a></td>
						</tr>` // acento do tipo crase vou à sei lá!!	   
    }
    body.innerHTML=linhas;
}

function excluir(id, nome,codigo) {
    let novoDados = []
    if (confirm(`Confirma a exclusão do ${nome} - (Jogador: ${codigo})?`)) {
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].id != id)
                novoDados.push(dados[i])
        }
        dados = novoDados;
        montarTabela();
    }

}

function selecionarTodos(nome){
    let cks = document.querySelectorAll("#grid input[type='checkbox']");
    for (let i=0; i<cks.length; i++)
        cks[i].checked = nome; // vai selecionar cada checkbox ou vai tirar a seleção de todos
}

function excluirTodos() {
    if (dados.length > 0) {
        if (confirm('Confirma a exclusão de todos Jogadores selecionados?')) {
            let cks = document.querySelectorAll("#grid input[type='checkbox']:checked");
            let novoDados = [];
            for (let i = 0; i < dados.length; i++) {
                let achou = false;
                for (let j = 0; j < cks.length; j++) {
                    if (cks[j].getAttribute("data-id") == dados[i].id)
                        achou = true;
                }
                if (!achou)
                    novoDados.push(dados[i]);
            }
            dados = novoDados;
            montarTabela();
            document.getElementById('ckTodos').checked = false;
        }
    }
    else alert('Não há itens cadastrados!!');
}
    

