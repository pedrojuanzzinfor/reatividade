import { Header, ItemTarefa } from './componentes.js';
import { criarEstado } from "./minireact.js";

const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"))
const temaSalvo = JSON.parse(localStorage.getItem("tema"))

const [lerTarefas, alterarTarefas] = criarEstado(tarefasSalvas ?? [], render)
const [lerTema, alterarTema] = criarEstado(temaSalvo ?? [], render)
const [lerBusca, alterarBusca] = criarEstado(" ", render)

render()

function App() {
    const tarefasFiltradas = lerTarefas().filter(function (i) {
        if (lerBusca() != " ") return (i.toLowerCase()).includes(lerBusca().toLowerCase())
        else return true
    })

    const elementosLi = tarefasFiltradas.map(function (t, i) {
        return ItemTarefa({ texto: t, index: i })
    }).join("")

    return `
    ${Header({ tema: lerTema() })}

    <ul>
    ${elementosLi}
    </ul>`
}

function render() {
    const div = document.querySelector("#app")
    div.innerHTML = App()
    localStorage.setItem("tarefas", JSON.stringify(lerTarefas()))
    localStorage.setItem("tema", JSON.stringify(lerTema()))

}

const inputBusca = document.querySelector("#busca")
inputBusca.addEventListener("input", function () {
    alterarBusca(inputBusca.value)
})

window.trocarTema = function () {
    console.log("oi")
    if (lerTema() == "claro") {
        alterarTema("escuro")
    }
    else alterarTema("claro")
    document.querySelector("body").className = lerTema()
}

window.removerTarefa = function (i) {
    const removido = lerTarefas().filter((v, c) => {
        if (i == c) return false
        return true
    })
    alterarTarefas(removido)
}

window.adicionarTarefa = function () {
    const tarefas = (lerTarefas())
    tarefas.push((document.querySelector("#input-task").value))
    alterarTarefas(tarefas)
}