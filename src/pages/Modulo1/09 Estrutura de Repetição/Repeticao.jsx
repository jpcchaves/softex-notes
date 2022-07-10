import React from "react";

const Repeticao = () => {
  return (
    <>
      <h2>Estrutura de Repetição</h2>
      <h3>Qual a intenção?</h3>
      <p>
        Elas têm como intenção fazer que as instruções possam se repetir se ma
        necessidade de estar duplicando o algoritmo. Isso evita várias
        instruções repetidas que podem deixam o código longo
      </p>
      <p>
        Toda estrutura de repetição deve ter o valor inicial para se repetir e
        verificar se realmente vai haver repetição de instrução,
      </p>
      <p>
        É importante perceber que o valor de parada deve se superior ao valor
        inicial.
      </p>
      <p>
        Toda estrutura de repetição deve ter uma inicialização que informa a
        partir de qual valor começa e serve como contador para terminar a
        repetição. Além disso, ela deve contar com a condição que indica quando
        deve ter a repetição e se ela ocorrerá. Por fim, o incremento é o valor
        a ser somado ou diminuído da inicialização, dependendo da situação.
      </p>
      <h3>Tipos de Estrutura de Repetição</h3>
      <h4>Instruções com testes no início do código</h4>
      <p>
        <code>
          <br />
          contador {"<-"} inicialização
          <br /> enquanto (contador {"<"} condição) faca
          <br />
          instrução
          <br />
          contador{" <-"} contador + incremento
          <br /> fimenquanto
        </code>
      </p>
      <p>
        Só será executada se a expressão lógica for verdadeira no início da
        estrutura. Repetindo enquanto permanecer verdadeira. Caso seja falsa,
        ela para de repetir.
      </p>
      <p>
        <strong>Sintaxe da estrutura:</strong>
        <code>
          {" "}
          <br />
          ENQUANTO <br />
          FAÇA <br />
          FIMENQUANTO
        </code>
      </p>
      <p>
        <strong>Exemplo:</strong>
      </p>
      <p>
        <code>
          <br />X {"<-"} 1 <br />
          ENQUANTO (X {" <= "} 10) FACA
          <br />
          ESCREVA("INFORME O VALOR: ")
          <br />
          LEIA(NUM)
          <br />
          ESCREVA("VALOR É: ", NUM)
          <br />X {" <- "} X + 1 <br />
          FIMENQUANTO
        </code>
      </p>
      <h4>Instruções com testes ao final do código</h4>
      <p>
        <code>
          <br />
          contador {"<-"} inicialização <br /> repita
          <br /> instrução
          <br /> contador {"<-"} contador + incremento
          <br /> ate (contador {">"} condição)
        </code>
      </p>
      <p>
        Nesse caso, o teste será executado apenas uma vez, visto que o teste
        está inserido ao final da estrutura.
      </p>
      <p>
        Logo após, é repetido sempre quando a expressão lógica for falsa no
        final da estrutura. Caso seja verdadeira, ela para de repetir.
      </p>
      <p>
        <strong>Sintaxe da estrutura:</strong>
        <code>
          {" "}
          <br />
          REPITA <br />
          ATE
        </code>
      </p>
      <p>
        <code>
          <br />X {"<-"} 1 <br />
          ESCREVA("INFORME O VALOR: ")
          <br />
          LEIA(NUM)
          <br />
          ESCREVA("VALOR É: ", NUM)
          <br />X {" <- "} X + 1 ATE (X{" > "} 10) <br />
        </code>
      </p>
      <h3>Estrutura com Variável de Controle</h3>
      <p>
        <code>
          <br />
          para contador de inicialização ate condição passo incremento faca
          <br />
          instrução
          <br /> fimpara
        </code>
      </p>
      <p>
        Nesse caso, temos uma variável de controle, e temos a informação do
        início, fim e do incremento
      </p>
      <p>
        <strong>Sintaxe da estrutura:</strong>
        <code>
          {" "}
          <br />
          PARA <br />
          FACA <br />
          FIMPARA
        </code>
      </p>
      <p>
        <code>
          PARA X DE 1 ATE 10 FACA <br />
          ESCREVA("INFORME O VALOR: ")
          <br />
          LEIA (NUM) <br />
          ESCREVA ("O VALOR É: ", NUM)
          <br />
        </code>
      </p>
      <hr />
    </>
  );
};

export default Repeticao;
