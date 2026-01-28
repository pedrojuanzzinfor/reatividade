import { criarEstado } from "./minireact.js";

const [lerTarefas, alterarTarefas] = criarEstado(['aprender JS', 'Entender REACT'], render)
const [lerTema, alterarTema] = criarEstado('claro', render)
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

    return "<ul>" + (lerTarefas().map(function (i) {
        return "<li>" + i + "<button id='remove'>X</button></li>"

    }).join(" ")) + "</ul>"
}
function render() {
    document.querySelector("body").className = lerTema()
    const div = document.querySelector("#app")
    div.innerHTML = App()
}