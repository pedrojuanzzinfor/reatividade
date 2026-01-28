
export function criarEstado(valorInicial, funcaoQueAtualizaATela) {

    let valorInterno = valorInicial;

  
    function ler() {
        return valorInterno
    }

    function alterar(novoValor) {
        valorInterno = novoValor
        funcaoQueAtualizaATela(novoValor)
    }
    return [ler, alterar];
}
