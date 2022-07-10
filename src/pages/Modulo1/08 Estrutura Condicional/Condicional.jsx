import React from "react";

const Condicional = () => {
  return (
    <>
      <h2>Estruturas Condicionais</h2>
      <p>
        Em algoritmos, as estruturas condicionais tem início e fim. Essas
        estruturas são responsáveis por indicar o fluxo do algoritmo, fazendo
        com que algumas intruções sejam executadas ou não.
      </p>
      <h3>Tipos de Estruturas</h3>
      <h4>Estrutura Simples</h4>
      <p>
        Representada pelo <strong>"SE"</strong> no início e{" "}
        <strong>"FIMSE"</strong> no final. Nele é feito uma pergunta usando
        expressões lógicas e, "SE" o resultado for verdadeiro, é emitido uma
        mensagem ou realizado alguma ação dentro da estrutura.
      </p>
      <p>
        Exemplo:
        <p>
          <code>
            <br /> SE(X {">"} 0) ENTAO <br />
            ESCREVA("POSITIVO ") <br />
            FIMSE
          </code>
        </p>
      </p>
      <h4>Estrutura Composta</h4>
      <p>
        Usamos o <strong>SE</strong>, <strong>SENAO</strong> e{" "}
        <strong>FIMSE</strong>
      </p>
      <p>
        Exemplo:
        <p>
          <code>
            <br /> SE(X {">"} 0) ENTAO <br />
            ESCREVA("POSITIVO ") <br />
            SENAO <br />
            ESCREVA("NEGATIVO") <br />
            FIMSE
          </code>
        </p>
      </p>
      <h4>Estrutura Encadeada</h4>
      <p>Seria basicamente várias estruturas SE e SENAO em cadeia.</p>
      <h4>Estrutura Múltipla Escolha (switch)</h4>
      <p>
        Nessa estrutura, existem várias opções pré determinadas, mas somente uma
        resposta. A esturura é formada por ESCOLHA, CASO, FIMESCOLHA.
      </p>
      <p>
        Exemplo:
        <p>
          <code>
            {" "}
            <br />
            ESCOLHA X <br />
            CASO1 <br />
            ESCREVA("FUTEBOL") CASO2 <br />
            ESCREVA("BASQUETE") <br />
            OUTROCASO <br />
            ESCREVA("OPÇÃO ERRADA!") <br />
            FIMESCOLHA
          </code>
        </p>
      </p>
      <h3>Estruturas de Controle</h3>
      <p>
        As estruturas de controle são responsáveis por organizar o algoritmo e
        realizar alguns fluxos durante o programa. No nosso dia a dia, elas
        aparecem em um pagamento on-line, na verificação de um produto no site
        de uma loja, nos cadastros feitos para um vestibular, entre outros.
      </p>
      <h3>Estruturas Sequenciais</h3>
      <p>
        Já as estruturas sequenciais são representadas por qualquer algoritmo
        simples que segue uma sequência de cima para baixo e da esquerda para a
        direita, de forma semelhante a como escrevemos em um caderno.
      </p>
      <h3>Estruturas Condicionais</h3>
      <p>
        As estruturas condicionais, também conhecidas como estruturas de seleção
        ou de decisão, remetem a escolhas. Elas são utilizadas quando é
        necessário uma resposta do usuário para decidir qual linha de comando
        deve ser executada. As tomadas de decisão das estruturas são realizadas
        através de expressões lógicas, exceto para múltipla escolha. Elas geram
        um resultado verdadeiro ou falso e, a partir daí, influenciam todo o
        fluxo da estrutura.
      </p>
      <p>
        Existem quatro tipos de estruturas condicionais:
        <strong> simples; composta; encadeada; e múltipla escolha.</strong>
      </p>
      <hr />
    </>
  );
};

export default Condicional;
