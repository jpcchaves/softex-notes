import React from "react";

const ConceitosLogica = () => {
  return (
    <>
      <h2>Conceitos Essenciais da Lógica</h2>
      <h3>Dados</h3>
      <p>
        Os computadores precisam de Dados para realizar o processamento. Esses
        dados possuem características diferentes e tem alguma finalidade.
      </p>
      <h3>Tipos de dados</h3>
      <p>Dados inteiros, reais, caracteres e lógicos</p>
      <p>Os inteiros são números inteiros e sem vírgula</p>
      <p>
        Os reais são os todos os tipos de números, inclusive com casas decimais
      </p>
      <p>Caracteres são letras, números e etc</p>
      <p>O tipo lógico é TRUE ou FALSE</p>
      <h3>Variáveis</h3>
      <p>Variáveis são os campos utilizados para armazenar os dados</p>
      <p>
        Elas precisam ser declaradas, informando qual o tipo de dado que será
        armazenado.
      </p>
      <p>
        Para armazenar os dados em variáveis, utilizamos o identificador, que é
        o nome do campo seguido do tipo. Exemplo:
        <br />
        <code> Variável IDADE recebe INTEIRO</code>
        <br />
        <code>Variável PESO recebe REAL</code>
        <br />
        <code>Variavel ENDEREÇO recebe CARACTER</code>
        <br />
        <code>Variável SEXO recebe LÓGICO</code>
      </p>
      <h3>Expressões Aritméticas</h3>
      <p>
        Para construir alguns algoritmos, precisamos utilizar cálculos
        matemáticos.
      </p>
      <p>
        Utilizamos os sinais de{" "}
        <strong>
          Adição, Substração, Divisão, Multiplicação, Potenciação, Radiciação
        </strong>
      </p>
      <h3>Ordem de Precedência dos Cálculos:</h3>
      <p>
        <code>
          <strong>
            (VALOR) + (SINAL DA EXPRESSÃO) + (OUTRO VALOR) = RESULTADO
          </strong>
        </code>
      </p>
      <p>
        Todo resultado de expressão ou utilização de algum dado é adicionado a
        uma variável atráves do comando de atribuição
      </p>
      <p>
        <code>
          X = 10 <br />
          NOME = CHARLES <br />
          RESULTADO = 10 ((30*2)-(15-5))/2
        </code>
      </p>
      <hr />
    </>
  );
};

export default ConceitosLogica;
