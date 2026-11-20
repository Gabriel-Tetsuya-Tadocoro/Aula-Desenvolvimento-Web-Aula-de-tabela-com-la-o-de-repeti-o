const corpoTabela=document.getElementById("corpoTabela")
const formulario=document.getElementById("formulario")

const computadores = [
    {Modelo:"teste1", Preço:"teste1", Processador:"teste1", Memoria_Ram:"teste1", Placa_de_Video:"teste1"},
    {Modelo:"teste2", Preço:"teste2", Processador:"teste2", Memoria_Ram:"teste2", Placa_de_Video:"teste2"},
    {Modelo:"teste3", Preço:"teste3", Processador:"teste3", Memoria_Ram:"teste3", Placa_de_Video:"teste3"},
    {Modelo:"teste4", Preço:"teste4", Processador:"teste4", Memoria_Ram:"teste4", Placa_de_Video:"teste4"},
]

function exibir(){
    corpoTabela.innerHTML = ""

    for (computador of computadores){
        corpoTabela.innerHTML +=`
            <tr>
                <td>${computador.Modelo}</td>
                <td>${computador.Preço}</td>
                <td>${computador.Processador}</td>
                <td>${computador.Memoria_Ram}</td>
                <td>${computador.Placa_de_Video}</td>
            </tr>
        `
    }
}

exibir()

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    const campomodelo=document.getElementById("campomodelo").value
    const campopreço=document.getElementById("campopreço").value
    const campoprocessador=document.getElementById("campoprocessador").value
    const campomemoriaram=document.getElementById("campomemoriaram").value
    const campoplacadevidio=document.getElementById("campoplacadevidio").value

    const x = {Modelo:campomodelo, Preço:campopreço, Processador:campoprocessador, Memoria_Ram:campomemoriaram, Placa_de_Video:campoplacadevidio}

    computadores.push(x)
    
    exibir()

})