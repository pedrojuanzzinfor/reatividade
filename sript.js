import { criarEstado } from "./minireact.js";

const [lerTarefas, alterarTarefas] = criarEstado(['aprender JS', 'Entender REACT'], render)
const [lerTema, alterarTema] = criarEstado('claro', render)
const [lerBusca, alterarBusca] = criarEstado(" ", render)
const botaoTema = document.querySelector("#tema")
const btn_novaTarefa = document.querySelector("#btn-add")
btn_novaTarefa.addEventListener("click", function () {
    const tarefas = (lerTarefas())
    tarefas.push((document.querySelector("#input-task").value))
    alterarTarefas(tarefas)
})
botaoTema.addEventListener("click", function () {

    if (lerTema() == "claro") {
        alterarTema("escuro")
    }
    else alterarTema("claro")
})

render()

function App() {
    const tarefasFiltradas = lerTarefas().filter(function (i) {
        if (lerBusca() != " ") return (i.toLowerCase()).includes(lerBusca().toLowerCase())
        else return true
    })
    return "<ul>" + (tarefasFiltradas.map(function (i) {
        return "<li>" + i + "<button id='remove'>X</button></li>"
    }).join(" ")) + "</ul>"
}
function render() {
    document.querySelector("body").className = lerTema()
    const div = document.querySelector("#app")
    div.innerHTML = App()
}
const inputBusca = document.querySelector("#busca")
inputBusca.addEventListener("input", function () {
    alterarBusca(inputBusca.value)
})
