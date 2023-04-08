import { useState } from "react"

export function Counter() {
  const [counter, setCounter] = useState(0) // pra ativar que o react olhe pra mudança de valor da variavel
  function increment() {
    // aqui a função increment usa a variavel counter para somar
    setCounter(counter+1)
  }

  return (
    // a parte visivel na tela
    <div>
      <h2>{counter}</h2> {/* aqui é pra aparecer o valor atual da variavel na tela*/}
      <button type="button" onClick={increment}>
        {/*aqui o botao ativa a função que faz a soma*/}
        Increment {/*aqui é o tituo do botão*/}
      </button>
    </div>
  ) 

  // imutabilidade react eu não altero um array por exemplo com o push
  // eu coloco Array= [ ..., "nova iformação que quero subir "]
}
