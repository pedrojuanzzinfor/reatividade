import { criarEstado } from "./minireact.js";

const [lerTarefas, alterarTarefas] = criarEstado(['aprender JS', 'Entender REACT'], render)
const btn_novaTarefa = document.querySelector("#btn-add")
btn_novaTarefa.addEventListener("click", function () {
    const tarefas = (lerTarefas())
    tarefas.push((document.querySelector("#input-task").value))
    alterarTarefas(tarefas)
})

render()

function App() {

    return "<ul>" + (lerTarefas().map(function (i) {
        return "<li>" + i + "<button id='remove'>X</button></li>"

    }).join(" ")) + "</ul>"
}
function render() {
    console.log(App())
    const div = document.querySelector("#app")
    div.innerHTML = App()
}