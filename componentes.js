// ============================================================================
// 🧱 FÁBRICA DE COMPONENTES (componentes.js)
// ============================================================================
//
// OBJETIVO: Transformar pedaços repetitivos de HTML em Funções Reutilizáveis.
// CONCEITO: No nosso "Mini-React", um Componente é apenas uma função que:
//           1. Recebe dados (chamados de "props").
//           2. Retorna uma STRING de HTML.
// ============================================================================


// ----------------------------------------------------------------------------
// 1. COMPONENTE: Botao
// ----------------------------------------------------------------------------
// Este componente deve gerar o HTML de um botão genérico.
//
// PROPS ESPERADAS (recebidas como um objeto):
// - label: O texto que vai aparecer dentro do botão (ex: "Adicionar", "Mudar Tema").
// - onClick: O NOME (string) da função global que será chamada ao clicar.
// - classe: (Opcional) Uma classe CSS extra, caso queira estilizar diferente.
//
// EXEMPLO DE USO NO FUTURO: 
// ${ Botao({ label: "Salvar", onClick: "salvarDados" }) }
//
export function Botao({ label, onClick, classe = "" }) {
    // TODO: Retorne uma Template String contendo a tag <button>.
    // DICA: Lembre-se de injetar as variáveis ${label}, ${onClick} e ${classe} nos lugares certos.
    // DICA 2: O atributo onclick do HTML espera algo como onclick="nomeDaFuncao()

    return `<button onclick="${onClick}()"class="${classe}">${label}</button>`; // <-- Escreva seu HTML aqui dentro
}

// ----------------------------------------------------------------------------
// 2. COMPONENTE: ItemTarefa
// ----------------------------------------------------------------------------
// Este componente cuida de desenhar UMA linha da lista (o <li>).
// Ele deve conter o texto da tarefa e o botão de remover.
//
// PROPS ESPERADAS:
// - texto: O conteúdo da tarefa.
// - index: A posição dela no array (necessário para o botão de remover saber quem apagar).
//
export function ItemTarefa({ texto, index }) {
    // TODO: Retorne o HTML do <li>.
    // DICA: Dentro do <li>, você deve ter um <span> com o texto e outro elemento para remover.
    // DICA: O botão de remover deve chamar a função global `removerTarefa(${index})`.


    return `<li>
    <span>${texto}</span>
    <button onclick="removerTarefa(${index})">
    remover</button>
    </li>`;
}


// ----------------------------------------------------------------------------
// 3. COMPONENTE: Header
// ----------------------------------------------------------------------------
// Este componente desenha o topo do site. Ele deve decidir qual texto mostrar
// no botão de tema (Claro ou Escuro) baseado no prop que receber.
//
// PROPS ESPERADAS:
// - tema: O valor atual do tema ("claro" ou "escuro").
//
export function Header({ tema }) {
    // TODO 1: Crie uma lógica (if/else ou ternário) para definir o texto do botão.
    // Se o tema for 'claro', o botão diz '🌙 Modo Escuro'.
    // Se o tema for 'escuro', o botão diz '☀️ Modo Claro'.

    // TODO 2: Retorne o HTML do <header>.
    // DESAFIO DE COMPOSIÇÃO: Em vez de escrever a tag <button> na mão aqui,
    // chame a função Botao({...}) que você criou acima dentro da template string!
    // Isso é "um componente dentro do outro".
    const textoBtn = tema == "claro" ? "🌙 Modo Escuro" : "☀️ Modo Claro"


    return `<header>
    ${Botao({ label: textoBtn, onClick: "trocarTema" })}
    </header>`
}


// ============================================================================
// INSTRUÇÕES PARA O ARQUIVO PRINCIPAL (main.js):
//
// 1. Importe estas funções no topo do main.js:
//    import { Botao, ItemTarefa, Header } from './componentes.js';
//
// 2. Vá até a sua função `App()`.
//
// 3. Substitua o HTML "hardcoded" (escrito na mão) pelas chamadas dessas funções.
//    Exemplo: Em vez de escrever <ul>...map...</ul>, você fará:
//    <ul>
//       ${ tarefas.map((t, i) => ItemTarefa({ texto: t, index: i })).join('') }
//    </ul>
//
// Boa sorte refatorando! 🧹
// ============================================================================