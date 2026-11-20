const corpoTabela=document.getElementById("corpoTabela")
const formulario=document.getElementById("formulario")

const computadores = [
    {Modelo:"teste1", Preço:"teste1", Processador:"teste1", Memoria Ram:"teste1", Placa de Video:"teste1"},
    {Modelo:"teste2", Preço:"teste2", Processador:"teste2", Memoria Ram:"teste2", Placa de Video:"teste2"},
    {Modelo:"teste3", Preço:"teste3", Processador:"teste3", Memoria Ram:"teste3", Placa de Video:"teste3"},
    {Modelo:"teste4", Preço:"teste4", Processador:"teste4", Memoria Ram:"teste4", Placa de Video:"teste4"},
]

function exibir(){
    corpoTabela.innerHTML = ""

    for (computador of computadores){
        corpoTabela.innerHTML +=`
            <tr>
                <td>${computador.Modelo}</td>
                <td>${computador.Preço}</td>
                <td>${computador.Processador}</td>
                <td>${computador.Memoria Ram}</td>
                <td>${computador.Placa de video}</td>
            </tr>
        `
    }
}

exibir()

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    const valorNome=document.getElementById("campoNome").value
    const valorCurso=document.getElementById("campoCurso").value

    const x = {nome:valorNome, curso:valorCurso}

    alunos.push(x)
    
    exibir()

})